# Inquiry notifier

Emails you when a new inquiry lands in Firestore, with the full detail as an
attached PDF.

Runs on Google Apps Script's free tier — no Blaze plan, no Cloud Functions, no
third-party service holding your data.

Watches three collections:

| Collection | Source |
|---|---|
| `request_access` | Request Access folder on the desktop |
| `concierge_inquiry` | CIRE Concierge private inquiry (vehicles) |
| `brilliance_inquiry` | Sophisticated Brilliance private inquiry (jewellery) |

---

## Setup

### 1. Create a service account

In the [Google Cloud console](https://console.cloud.google.com/iam-admin/serviceaccounts?project=cire-conglomerate),
with the **cire-conglomerate** project selected:

1. **Create service account** → name it something like `inquiry-notifier`.
2. Grant it the **Cloud Datastore User** role. That is read/write on Firestore;
   this script only reads, but there is no narrower predefined role.
3. Open the account → **Keys** → **Add key** → **Create new key** → **JSON**.
   A `.json` file downloads.

A service account bypasses Firestore security rules, which is why this works
even though the collections are closed to public reads.

### 2. Create the Apps Script project

1. Go to [script.google.com](https://script.google.com) → **New project**.
2. Delete the placeholder `myFunction`, paste in the whole of
   `inquiry-notifier.gs`.
3. At the top of the file set:
   - `RECIPIENT_EMAIL` — where notifications go.

### 3. Store the key

In the Apps Script project: **Project Settings** (gear) → **Script properties**
→ **Add script property**.

- Property: `FIREBASE_SA_KEY`
- Value: the **entire contents** of the JSON file you downloaded

Then delete the downloaded file from your Downloads folder. This key grants
access to your database — it belongs in Script Properties and nowhere else.
Never commit it, never paste it into a chat.

### 4. Set the watermark

Run `setUp()` once from the editor. Google will ask you to authorise the script
the first time; it needs permission to send mail as you and to make external
requests.

This stamps "everything up to now is already seen", so the first scheduled run
doesn't email you every inquiry you've ever received.

### 5. Install the trigger

**Triggers** (clock icon) → **Add trigger**:

- Function: `poll`
- Event source: **Time-driven**
- Type: **Minutes timer** → **Every 5 minutes**

Done. New inquiries reach you within ~5 minutes.

---

## What arrives

**Email body** — a short summary, one line per inquiry, readable on a lock
screen without opening anything.

**Attached PDF** — the full detail, sectioned: Contact, Request, Schedule,
Delivery, Driver & Insurance, Add-ons. Only the sections an inquiry actually
has are rendered.

### Why a document and not a spreadsheet

The three forms are very different shapes:

| Collection | Fields |
|---|---|
| `concierge_inquiry` | ~31 |
| `brilliance_inquiry` | 8 |
| `request_access` | 7 |

Flattening them into one sheet means roughly 40 columns, of which an Access
Request fills 7 and a Brilliance inquiry 8 — most of every row would be empty
cells, and the columns that matter differ per row. A sectioned document renders
only the fields present, so each inquiry reads as a page instead of a sparse
line.

A spreadsheet is the better tool for a *different* job — comparing many records
at once, sorting, filtering. If you want that as well, the right shape is a
periodic export with one sheet per collection rather than one sheet for all
three. Say the word and I'll add it.

Any field a form starts sending later still appears, under "Additional", so a
new question on a form can never go missing from a notification.

## Limits and behaviour

- **Gmail quota** — 100 recipients/day on a consumer account, and 25MB per
  message. Nowhere near a constraint at this volume.
- **Batching** — one run picks up to 50 new documents per collection and sends a
  single combined email rather than one per inquiry.
- **Failure handling** — the watermark only advances past documents that were
  actually read. If a run throws, the next one picks them up again instead of
  losing them. The trade-off is that a crash *after* sending mail could
  re-notify you; duplicates beat silence.
- **Ordering** — queries sort on the `timestamp` field the forms write. Firestore
  may ask you to create a single-field index the first time; the error message
  in the execution log links straight to the one-click fix.

## Checking it works

Submit a test inquiry on the site, then in the Apps Script editor run `poll()`
by hand and look at **Executions**. If nothing arrives, check in this order:

1. `FIREBASE_SA_KEY` is set and is the full JSON.
2. The service account has **Cloud Datastore User** on the right project.
3. The execution log — a missing Firestore index reports itself there with a
   link to create it.
