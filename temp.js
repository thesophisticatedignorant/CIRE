            // ── Node Selector ──────────────────────────────────────
            window.selectNode = function (el, color) {
              document.querySelectorAll(".wwn-node").forEach((n) => {
                n.style.transform = "scale(1)";
                n.style.boxShadow = "none";
              });
              el.style.transform = "scale(1.35)";
              el.style.boxShadow = `inset 0 0 0 4px #000`;
              document.getElementById("join-node-color").value = color;
            };
            // Select first node by default
            document.addEventListener("DOMContentLoaded", () => {
              const firstNode = document.querySelector(".wwn-node");
              if (firstNode) selectNode(firstNode, "#FF3B30");
            });

            // ── Seed Permanent Nodes ──
            const PERMANENT_NODES = [
              {
                name: "DRIZZY",
                lat: 43.735382210944586,
                lng: -79.3622828163612,
                color: "#FF9500",
              },
              {
                name: "JAHRON B",
                lat: 43.59566462854379,
                lng: -79.63662301668147,
                color: "#FFD60A",
              },
              {
                name: "LEXSON",
                lat: 43.65095316854432,
                lng: -79.38009227367364,
                color: "#00C7BE",
              },
              {
                name: "MARGIELAA MAD MAN",
                lat: 40.838736865329075,
                lng: -73.87511872684804,
                color: "#FF3B30",
              },
              {
                name: "BENNY",
                lat: 40.756481489910165,
                lng: -73.98802038679334,
                color: "#00C7BE",
              },
              {
                name: "MOSES",
                lat: 40.76175336408245,
                lng: -73.98011213824273,
                color: "#FF3B30",
              },
              {
                name: "SHEFF G",
                lat: 40.65083682901696,
                lng: -73.96070209068671,
                color: "#00C7BE",
              },
              {
                name: "SLEEPY",
                lat: 40.65989556095072,
                lng: -73.9528045397387,
                color: "#00C7BE",
              },
              {
                name: "LØRD FLACKØ",
                lat: 40.79846811935621,
                lng: -73.94224978799733,
                color: "#0A84FF",
              },
              {
                name: "WISDOM K.",
                lat: 40.70568219185011,
                lng: -74.00484693581987,
                color: "#0A84FF",
              },
              {
                name: "SPIKE TEE",
                lat: 40.806423022573085,
                lng: -73.94535669193269,
                color: "#30D158",
              },
              {
                name: "OBJ",
                lat: 40.742282823206864,
                lng: -74.17387446016903,
                color: "#30D158",
              },
              {
                name: "HOOD POPE",
                lat: 40.80127775104019,
                lng: -73.94381061891625,
                color: "#30D158",
              },
              {
                name: "NASTY BABY",
                lat: 40.796863711812165,
                lng: -73.93954042843788,
                color: "#0A84FF",
              },
              {
                name: "12VY",
                lat: 40.798782874113286,
                lng: -73.95276962925452,
                color: "#FFD60A",
              },
              {
                name: "YG ADDIE",
                lat: 40.80102856268634,
                lng: -73.93828062983819,
                color: "#00C7BE",
              },
              {
                name: "YOUNG LORD",
                lat: 40.80003069509656,
                lng: -73.94152949866229,
                color: "#30D158",
              },
              {
                name: "KERWIN FROST",
                lat: 40.81043181574826,
                lng: -73.9395550160134,
                color: "#00C7BE",
              },
              {
                name: "A$$PIZZA666",
                lat: 40.7048535286697,
                lng: -74.00333487439326,
                color: "#FFD60A",
              },
              {
                name: "BLOODY O,",
                lat: 40.810774887602264,
                lng: -73.94585939997424,
                color: "#00C7BE",
              },
              {
                name: "BLOODY DIOR",
                lat: 40.80027514867236,
                lng: -73.95497925141208,
                color: "#FFD60A",
              },
              {
                name: "COLM",
                lat: 40.66108416229203,
                lng: -73.95679869291311,
                color: "#FFD60A",
              },
              {
                name: "ANGELO",
                lat: 40.70957402636315,
                lng: -73.83014129843093,
                color: "#00C7BE",
              },
              {
                name: "termaine",
                lat: 40.69955471523261,
                lng: -73.79863879776461,
                color: "#BF5AF2",
              },
              {
                name: "TELFAR",
                lat: 40.709964926923526,
                lng: -73.82113004515155,
                color: "#FFD60A",
              },
              {
                name: "LUAR",
                lat: 40.642869990572706,
                lng: -73.94032839844178,
                color: "#FF3B30",
              },
              {
                name: "RONNIE",
                lat: 40.71553189043298,
                lng: -73.83722288494465,
                color: "#FF9500",
              },
              {
                name: "DAP",
                lat: 40.815669429859554,
                lng: -73.95381497294679,
                color: "#00C7BE",
              },
              {
                name: "VIC",
                lat: 40.732251998737944,
                lng: -74.17431357464093,
                color: "#00C7BE",
              },
              {
                name: "TYSHAWN",
                lat: 40.851504361457785,
                lng: -73.87139509799972,
                color: "#30D158",
              },
              {
                name: "EVAN",
                lat: 40.71297960649578,
                lng: -74.01186226902468,
                color: "#FFD60A",
              },
              {
                name: "ALTON",
                lat: 40.702753929349676,
                lng: -74.00913078202737,
                color: "#30D158",
              },
              {
                name: "JOVEL",
                lat: 40.655945658206676,
                lng: -73.94473142262929,
                color: "#30D158",
              },
              {
                name: "IAN",
                lat: 40.659518977070135,
                lng: -73.94028296584123,
                color: "#FF9500",
              },
              {
                name: "ELLIOT",
                lat: 40.7225260112462,
                lng: -74.01455846083151,
                color: "#0A84FF",
              },
              {
                name: "LINOYA",
                lat: 40.703056979884735,
                lng: -74.00178668081162,
                color: "#0A84FF",
              },
              {
                name: "DOCTOR TACO",
                lat: 40.71533401995203,
                lng: -73.99611439990032,
                color: "#FFD60A",
              },
              {
                name: "LARRY",
                lat: 40.71764990729499,
                lng: -74.0059611307268,
                color: "#0A84FF",
              },
              {
                name: "VINTAGE KING",
                lat: 40.72062516043734,
                lng: -73.99626199833541,
                color: "#FFD60A",
              },
              {
                name: "MORDECHAI",
                lat: 40.715736737406274,
                lng: -74.00667367992091,
                color: "#FFD60A",
              },
              {
                name: "DAO-YI",
                lat: 40.711569814635,
                lng: -74.00691559624259,
                color: "#00C7BE",
              },
              {
                name: "MAXWELL",
                lat: 40.71102137267257,
                lng: -74.00007250135678,
                color: "#0A84FF",
              },
              {
                name: "CARLOS",
                lat: 40.705423255793264,
                lng: -74.01289243418367,
                color: "#BF5AF2",
              },
              {
                name: "SHIONA",
                lat: 40.70942266429436,
                lng: -74.00533416771023,
                color: "#FFD60A",
              },
              {
                name: "GABRIELLA",
                lat: 40.71852026844662,
                lng: -74.0031871894598,
                color: "#30D158",
              },
              {
                name: "NINA",
                lat: 40.704970284588775,
                lng: -74.00160603798153,
                color: "#FF3B30",
              },
              {
                name: "SHOWTIME SHEDEUR",
                lat: 41.493822596144526,
                lng: -81.69743566313214,
                color: "#0A84FF",
              },
              {
                name: "JALEN TWO SHOES",
                lat: 39.95742474048618,
                lng: -75.16101459594599,
                color: "#00C7BE",
              },
              {
                name: "KC3",
                lat: 33.95012737180453,
                lng: -84.5402038682726,
                color: "#FF9500",
              },
              {
                name: "DEEBLOCK DUKE",
                lat: 33.957400122026314,
                lng: -84.55737037785251,
                color: "#30D158",
              },
              {
                name: "GIO",
                lat: 33.74473272812017,
                lng: -84.39354155913284,
                color: "#0A84FF",
              },
              {
                name: "WHAM",
                lat: 33.756908866610196,
                lng: -84.38184847046968,
                color: "#00C7BE",
              },
              {
                name: "BABYBOI",
                lat: 33.75983391643374,
                lng: -84.39930234421998,
                color: "#FF3B30",
              },
              {
                name: "JAYDA WAYDA",
                lat: 33.762447507894585,
                lng: -84.39424200042023,
                color: "#FF9500",
              },
              {
                name: "ANTOINE",
                lat: 33.745885844631395,
                lng: -84.39724584138604,
                color: "#FFD60A",
              },
              {
                name: "GUNNER STAHL",
                lat: 33.74502832502287,
                lng: -84.38450148642643,
                color: "#0A84FF",
              },
              {
                name: "P3EZY",
                lat: 33.75124744599967,
                lng: -84.38943962036365,
                color: "#00C7BE",
              },
              {
                name: "BAD GAL RIRI",
                lat: 34.04840808870895,
                lng: -118.24877681919779,
                color: "#30D158",
              },
              {
                name: "UNCLE LARRY",
                lat: 37.79165333583785,
                lng: -122.41053780450623,
                color: "#00C7BE",
              },
              {
                name: "VINCE",
                lat: 33.76892173662597,
                lng: -118.19406429297311,
                color: "#30D158",
              },
              {
                name: "ALEALI",
                lat: 34.057200335113215,
                lng: -118.24547169193315,
                color: "#BF5AF2",
              },
              {
                name: "SALEHE",
                lat: 34.058177763602735,
                lng: -118.24033575493756,
                color: "#00C7BE",
              },
              {
                name: "KAILAND",
                lat: 34.044592793442746,
                lng: -118.25166539053657,
                color: "#30D158",
              },
              {
                name: "SEAN",
                lat: 34.04799038620741,
                lng: -118.24965104432175,
                color: "#FF9500",
              },
              {
                name: "DEVON",
                lat: 34.04671624893479,
                lng: -118.25242939959776,
                color: "#FFD60A",
              },
              {
                name: "VENEDA",
                lat: 34.06098395862966,
                lng: -118.24328513492894,
                color: "#BF5AF2",
              },
              {
                name: "BENDA",
                lat: 25.78112327447335,
                lng: -80.19766023609031,
                color: "#FF9500",
              },
              {
                name: "GEIGER",
                lat: 25.76852983728961,
                lng: -80.19196763902077,
                color: "#FFD60A",
              },
              {
                name: "SOLESBYSIR",
                lat: 25.780498383181257,
                lng: -80.19229689889191,
                color: "#FF3B30",
              },
              {
                name: "LOUIS ANDRÉ",
                lat: 25.76691667392621,
                lng: -80.20180081253184,
                color: "#00C7BE",
              },
              {
                name: "MONSIEUR COUPET",
                lat: 25.77550508519076,
                lng: -80.20268064041893,
                color: "#30D158",
              },
              {
                name: "MR. FALLBACK",
                lat: 48.86747292801891,
                lng: 2.313831577378923,
                color: "#0A84FF",
              },
              {
                name: "STÉPHANE",
                lat: 48.862803405015214,
                lng: 2.3278739308299015,
                color: "#BF5AF2",
              },
              {
                name: "POSOCCO",
                lat: 45.468015165991964,
                lng: 9.183991709961582,
                color: "#FF9500",
              },
              {
                name: "GHALI",
                lat: 45.466390382161904,
                lng: 9.180118715167913,
                color: "#0A84FF",
              },
              {
                name: "MAHMOOD",
                lat: 45.45700859322699,
                lng: 9.185890653715811,
                color: "#FF3B30",
              },
              {
                name: "MAXIME - MXM",
                lat: 46.529402049529175,
                lng: 6.640144032411971,
                color: "#FFD60A",
              },
              {
                name: "CLINT419",
                lat: 51.514187819326885,
                lng: -0.12897405610616247,
                color: "#FF3B30",
              },
              {
                name: "GABRIEL",
                lat: 51.503838218313206,
                lng: -0.18506213722469272,
                color: "#00C7BE",
              },
              {
                name: "VIVIAN",
                lat: 51.513243299161424,
                lng: -0.13253648145605504,
                color: "#FFD60A",
              },
              {
                name: "@ARIPETROU",
                lat: 51.50012533376571,
                lng: -0.1187124680961446,
                color: "#0A84FF",
              },
              {
                name: "ISHAN",
                lat: 51.50602648544825,
                lng: -0.13055493561188947,
                color: "#00C7BE",
              },
              {
                name: "SLAWN",
                lat: 51.499673642134006,
                lng: -0.12070881483716162,
                color: "#0A84FF",
              },
              {
                name: "SANTAN DAVE",
                lat: 51.49633012744257,
                lng: -0.19817719121733307,
                color: "#00C7BE",
              },
              {
                name: "LEO",
                lat: 51.51637870291158,
                lng: -0.12292449617506532,
                color: "#FFD60A",
              },
              {
                name: "SWERVO",
                lat: 41.86946079840127,
                lng: -87.62103741162774,
                color: "#FF3B30",
              },
              {
                name: "JOE FRESHGOODS",
                lat: 41.86582294195752,
                lng: -87.6680219353091,
                color: "#FFD60A",
              },
              {
                name: "DON",
                lat: 41.85786775894938,
                lng: -87.6266374063578,
                color: "#30D158",
              },
              {
                name: "VIC LLOYD",
                lat: 41.85662562463688,
                lng: -87.62198358455503,
                color: "#FFD60A",
              },
              {
                name: "NINA CHANEL",
                lat: 41.60082359121513,
                lng: -87.63908720528484,
                color: "#30D158",
              },
            ];

            if (!localStorage.getItem("wwn_seeded_v9")) {
              localStorage.setItem(
                "join_network",
                JSON.stringify(PERMANENT_NODES),
              );
              localStorage.setItem("wwn_seeded_v9", "1");
            }
            // ── Leaflet Map Init ───────────────────────────────────
            window.initGuestbookMap = function () {
              if (window._wwnMapInitialized) return;
              window._wwnMapInitialized = true;

              window.wwnMap = L.map("wwn-map", {
                center: [40, -95],
                zoom: 2,
                zoomControl: false,
                attributionControl: false,
                scrollWheelZoom: true,
                dragging: true,
                minZoom: 1,
                maxZoom: 11,
              });

              // Pure black background + dark tile layer
              document.getElementById("wwn-map").style.background = "#000";

              L.tileLayer(
                "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png",
                {
                  subdomains: "abcd",
                  maxZoom: 20,
                  attribution: "",
                },
              ).addTo(window.wwnMap);

              // Helper — draw a colored circle marker
              function placeNode(lat, lng, color, name) {
                const marker = L.circleMarker([lat, lng], {
                  radius: 5,
                  fillColor: color,
                  color: "#000",
                  weight: 1,
                  opacity: 1,
                  fillOpacity: 0.95,
                }).addTo(map);
                marker.bindTooltip(name, {
                  permanent: false,
                  direction: "top",
                  className: "wwn-tooltip",
                });
              }

              // Load stored entries onto map
              function renderEntries() {
                const entries = JSON.parse(
                  localStorage.getItem("join_network") || "[]",
                );
                entries.forEach((e) => {
                  if (e.lat && e.lng)
                    placeNode(e.lat, e.lng, e.color || "#fff", e.name);
                });
              }
              renderEntries();

              // Prevent map events from bubbling to popup drag
              const mapEl = document.getElementById("wwn-map");
              mapEl.addEventListener("mousedown", (e) => e.stopPropagation());
              document
                .getElementById("wwn-form-panel")
                .addEventListener("mousedown", (e) => e.stopPropagation());

              setTimeout(() => map.invalidateSize(), 120);

              // Expose map so form can add new markers
              window._wwnMap = map;
              window._placeNode = placeNode;
            };

            // ── Form Submit ────────────────────────────────────────
            document
              .getElementById("join-network-form")
              .addEventListener("submit", async (e) => {
                e.preventDefault();
                const name = document.getElementById("join-name").value.trim();
                const email = document
                  .getElementById("join-email")
                  .value.trim();
                const location = document
                  .getElementById("join-location")
                  .value.trim();
                const ig = document.getElementById("join-ig").value.trim();
                const color = document.getElementById("join-node-color").value;
                const btn = e.target.querySelector('button[type="submit"]');
                const errMsg = document.getElementById("join-network-error");
                const succMsg = document.getElementById("join-network-success");

                btn.disabled = true;
                btn.style.opacity = "0.5";
                btn.textContent = "SUBMITTING...";
                errMsg.style.display = "none";

                // Save to localStorage (fallback)
                var locationData = {};
                try {
                  const ipRes = await fetch("http://ip-api.com/json/");
                  if (ipRes.ok) {
                    locationData = await ipRes.json();
                  }
                } catch (err) {
                  console.error("IP API Error", err);
                }

                if (
                  window.firebaseDB &&
                  window.firebaseAddDoc &&
                  window.firebaseCollection
                ) {
                  try {
                    await window.firebaseAddDoc(
                      window.firebaseCollection(
                        window.firebaseDB,
                        "newsletter_subscriptions",
                      ),
                      {
                        name,
                        email,
                        location,
                        ig,
                        color,
                        locationData: locationData,
                        timestamp: window.firebaseServerTimestamp(),
                      },
                    );
                  } catch (fbErr) {
                    console.error("Firebase Error: ", fbErr);
                  }
                }

                const entries = JSON.parse(
                  localStorage.getItem("join_network") || "[]",
                );
                const newEntry = {
                  name,
                  email,
                  location,
                  ig,
                  color,
                  lat: locationData.lat || null,
                  lng: locationData.lon || null,
                  ts: Date.now(),
                };
                entries.push(newEntry);
                localStorage.setItem("join_network", JSON.stringify(entries));

                var locationData = {};
                try {
                  const ipRes = await fetch("http://ip-api.com/json/");
                  if (ipRes.ok) {
                    locationData = await ipRes.json();
                  }
                } catch (err) {
                  console.error("IP API Error", err);
                }

                // Add to Firebase Firestore
                if (
                  window.firebaseDB &&
                  window.firebaseAddDoc &&
                  window.firebaseCollection
                ) {
                  try {
                    await window.firebaseAddDoc(
                      window.firebaseCollection(
                        window.firebaseDB,
                        "newsletter_subscribers",
                      ),
                      {
                        name,
                        email,
                        location_input: location,
                        instagram: ig,
                        color_preference: color,
                        locationData: locationData,
                        timestamp: window.firebaseServerTimestamp(),
                      },
                    );
                  } catch (fbErr) {
                    console.error("Firebase Error: ", fbErr);
                  }
                }

                e.target.style.display = "none";
                succMsg.style.display = "flex";

                setTimeout(() => {
                  closePopup("popup-guestbook");
                  localStorage.setItem("cire_network_joined", "true");

                  // Reveal desktop
                  document
                    .querySelectorAll(".desktop-folder")
                    .forEach((folder) => {
                      folder.style.opacity = "1";
                      folder.style.pointerEvents = "auto";
                    });

                  // Open default popups if they aren't open yet
                  openPopup("popup-maison");
                  openPopup("popup-transcendence");
                  openPopup("popup-brilliance");
                  openPopup("popup-ignorance");
                  positionInitialPopups();

                  // Reset form
                  btn.disabled = false;
                  btn.style.opacity = "1";
                  btn.textContent = "JOIN THE COMMUNITY";
                  e.target.reset();
                  e.target.style.display = "flex";
                  succMsg.style.display = "none";
                }, 3000);
              });
          </script>
    <script>
      // Data matching your existing structure
      window.CAROUSEL_PRODUCTS = [
  {
     name: "Beast",
     collection: "sophisticated-brilliance",
     description: "Pendant I: **Beast** explores the instinct to conceal pain rather than confront it. Material brilliance is concentrated within the damaged areas, suggesting attempts to mask unresolved wounds. The reverse mosaic setting is intentional — an uneven, fragmented surface representing the \"rough around the edges\" nature of the unhealed man.",
     images: [
        "Beast Studio Photography/Rose/RG Beast Front.png",
        "Beast Studio Photography/Rose/RG Beast Front Left.png",
        "Beast Studio Photography/Rose/RG Beast Front Right.png",
        "Beast Studio Photography/Rose/RG Beast Back.png",
        "Beast Studio Photography/Rose/RG Beast on Celestial Scars.png"
     ]
  },
  {
     name: "Metamorphosis",
     collection: "sophisticated-brilliance",
     description: "Pendant II: **Metamorphosis** represents movement between denial and acceptance. The more traditional stone-setting arrangement introduces structure and order, signifying discipline, self-awareness, and progression along the journey of refinement.",
     images: [
        "Metamorphosis Studio Photography/Rose/RG Metamorphosis Front.png",
        "Metamorphosis Studio Photography/Rose/RG Metamorphosis Front Left.png",
        "Metamorphosis Studio Photography/Rose/RG Metamorphosis Front Right.png",
        "Metamorphosis Studio Photography/Rose/RG Metamorphosis Back.png",
        "Metamorphosis Studio Photography/Rose/RG Metamorphosis on Celestial Scars.png"
     ]
  },
  {
     name: "Humble",
     collection: "sophisticated-brilliance",
     description: "Pendant III: **Humble** embodies acceptance. The wounds remain visible and unembellished, free of excess. With no stones present, the piece depicts resilience shown through transparency rather than display.",
     images: [
        "Humble Studio Photography/Rose/RG Humble Front.png",
        "Humble Studio Photography/Rose/RG Humble Front Left.png",
        "Humble Studio Photography/Rose/RG Humble Front Right.png",
        "Humble Studio Photography/Rose/RG Humble Back.png",
        "Humble Studio Photography/Rose/RG Humble on Celestial Scars.png"
     ]
  },
  {
     name: "Celestial Scars",
     collection: "sophisticated-brilliance",
     description: "Cuban Link: <i>Celestial Scars</i> is a reimagined, reversible interpretation of the Cuban link. One side bears intentional surface scarring with a sandblasted finish; the other remains smooth and polished. The duality represents the coexistence of damage and refinement — the choice to reveal or conceal, without denying either.",
     images: [
        "Celestial Scars Studio Photography/Rose/RG Celestial Scars Lock n Link.png",
        "Celestial Scars Studio Photography/Rose/RG Celestial Scars Lock Closeup Alt.png",
        "Celestial Scars Studio Photography/Rose/RG Celestial Scars Link Macro.png",
        "Celestial Scars Studio Photography/Rose/RG Celestial Scars Neck Bust.png"
     ]
  },
  {
     name: "The Nails",
     collection: "sophisticated-brilliance",
     description: "Earrings: <i>The Nails</i> transform symbols of suffering into emblems of endurance. The Nova-cut center stone, with over 150 facets, refracts exceptional light while maintaining clarity — a metaphor for pressure turned into brilliance. The gauge-inspired backing, secured with a screw mechanism and fully pavé-set, references the transformation of an object once associated with force and cruelty into an ornament of intention.",
     images: [
        "The Nails Studio Photography/Rose/RG Nails Gauge Macro.png",
        "The Nails Studio Photography/Rose/RG Nails Head On.png",
        "The Nails Studio Photography/Rose/RG Nails Gauge Dominant View.png",
        "The Nails Studio Photography/Rose/RG Nails Front Left.png"
     ]
  },
  {
     name: "The Veil - Black",
     collection: "sophisticated-ignorance",
     price: "30",
     colors: ["Black"],
     sizes: ["ONE SIZE"],
     description: "Protection through perception.\\n\\nFOUNDATIONS SERVES AS THE BASE LAYER OF REFINEMENT; THE STEPPING STONES OF YOUR WARDROBE DESIGNED FOR STRUCTURE, COMFORT AND EVERYDAY UNIFORMITY. THROUGH SIMPLICITY AND PRECISION, FOUNDATIONS DEFINES THE ESSENTIALS. WHERE FORM TAKES SHAPE AND SOPHISTICATION BEGINS.",
     images: [
        "Foundations/The Veil/Black/Black Veil Front.png",
        "Foundations/The Veil/Black/Black Veil Side.png",
        "Foundations/The Veil/Black/Black Veil Back.png"
     ]
  },
  {
     name: "The Veil - Camo",
     collection: "sophisticated-ignorance",
     price: "30",
     colors: ["Camo"],
     sizes: ["ONE SIZE"],
     description: "Protection through perception.\\n\\nFOUNDATIONS SERVES AS THE BASE LAYER OF REFINEMENT; THE STEPPING STONES OF YOUR WARDROBE DESIGNED FOR STRUCTURE, COMFORT AND EVERYDAY UNIFORMITY. THROUGH SIMPLICITY AND PRECISION, FOUNDATIONS DEFINES THE ESSENTIALS. WHERE FORM TAKES SHAPE AND SOPHISTICATION BEGINS.",
     images: [
        "Foundations/The Veil/Camo/Camo Veil Front.png",
        "Foundations/The Veil/Camo/Camo Veil Side.png",
        "Foundations/The Veil/Camo/Camo Veil Back.png"
     ]
  },
  {
     name: "The Cornerstone - Black",
     collection: "sophisticated-ignorance",
     price: "35",
     colors: ["Black"],
     sizes: ["S", "M", "L", "XL", "XXL"],
     description: "Simplicity as sophistication. 100% Cotton, Slim Fit. Ribbed crewneck collar. 180 GSM medium-weight fabric. Metallic foil Foundations insignia at front left hem.",
     images: [
        "Foundations/Cornerstone/Cornerstone Black.png",
        "Foundations/Cornerstone/Cornerstone Black Closeup.png"
     ]
  },
  {
     name: "The Cornerstone - White",
     collection: "sophisticated-ignorance",
     price: "35",
     colors: ["White"],
     sizes: ["S", "M", "L", "XL", "XXL"],
     description: "Simplicity as sophistication. 100% Cotton, Slim Fit. Ribbed crewneck collar. 180 GSM medium-weight fabric. Metallic foil Foundations insignia at front left hem.",
     images: [
        "Foundations/Cornerstone/Cornerstone White.png",
        "Foundations/Cornerstone/Cornerstone White Closeup.png"
     ]
  },
  {
     name: "The Breakaway - Amethyst",
     collection: "sophisticated-ignorance",
     price: "150",
     colors: ["Amethyst"],
     sizes: ["S", "M", "L", "XL", "XXL"],
     description: "Transformation in motion. 100% Polyester, double-knit construction. Sublimated gradient design featuring the New York City skyline. Contoured hood for comfort and profile. Drop-tail hem and zippered side pockets. Embroidered Foundations insignia on left arm. 260 GSM midweight fabric for structured flexibility.",
     images: [
        "Foundations/The Breakaway/Amethyst/Breakaway Amethyst Hoodie Front.png",
        "Foundations/The Breakaway/Amethyst/Breakaway Amethyst Hoodie Front Zoomed.png",
        "Foundations/The Breakaway/Amethyst/Breakaway Amethyst Hoodie Back.png",
        "Foundations/The Breakaway/Amethyst/Breakaway Amethyst Pants Front.png",
        "Foundations/The Breakaway/Amethyst/Breakaway Amethyst Pants Side.png",
        "Foundations/The Breakaway/Amethyst/Breakaway Amethyst Pants Back.png"
     ]
  },
  {
     name: "The Breakaway - Grapefruit",
     collection: "sophisticated-ignorance",
     price: "150",
     colors: ["Grapefruit"],
     sizes: ["S", "M", "L", "XL", "XXL"],
     description: "Transformation in motion. 100% Polyester, double-knit construction. Sublimated gradient design featuring the New York City skyline. Contoured hood for comfort and profile. Drop-tail hem and zippered side pockets. Embroidered Foundations insignia on left arm. 260 GSM midweight fabric for structured flexibility.",
     images: [
        "Foundations/The Breakaway/Grapefruit/Breakaway Grapefruit Hoodie Front.png",
        "Foundations/The Breakaway/Grapefruit/Breakaway Grapefruit Hoodie Front Zoomed.png",
        "Foundations/The Breakaway/Grapefruit/Breakaway Grapefruit Hoodie Back.png",
        "Foundations/The Breakaway/Grapefruit/Breakaway Grapefruit Pants Front.png",
        "Foundations/The Breakaway/Grapefruit/Breakaway Grapefruit Pants Side.png",
        "Foundations/The Breakaway/Grapefruit/Breakaway Grapefruit Pants Back.png"
     ]
  },
  {
     name: "The Breakaway - Graphite",
     collection: "sophisticated-ignorance",
     price: "150",
     colors: ["Graphite"],
     sizes: ["S", "M", "L", "XL", "XXL"],
     description: "Transformation in motion. 100% Polyester, double-knit construction. Sublimated gradient design featuring the New York City skyline. Contoured hood for comfort and profile. Drop-tail hem and zippered side pockets. Embroidered Foundations insignia on left arm. 260 GSM midweight fabric for structured flexibility.",
     images: [
        "Foundations/The Breakaway/Graphite/Breakaway Graphite Hoodie Front.png",
        "Foundations/The Breakaway/Graphite/Breakaway Graphite Hoodie Front Zoomed.png",
        "Foundations/The Breakaway/Graphite/Breakaway Graphite Hoodie Back.png",
        "Foundations/The Breakaway/Graphite/Breakaway Graphite Pants Front.png",
        "Foundations/The Breakaway/Graphite/Breakaway Graphite Pants Side.png",
        "Foundations/The Breakaway/Graphite/Breakaway Graphite Pants Back.png"
     ]
  },
  {
     name: "The Contradiction",
     collection: "sophisticated-ignorance",
     price: "420",
     colors: ["Multi"],
     sizes: ["S", "M", "L", "XL", "XXL"],
     description: `<div style="display: flex; gap: 40px; text-align: left;"><div style="flex: 1;"><h3 style="font-weight: bold; letter-spacing: 0.1em; margin-bottom: 15px; font-size: 14px;">EXTERIOR<br>COMPOSITION</h3><ul style="padding-left: 20px; line-height: 1.6; list-style-type: disc;"><li style="margin-bottom: 10px;">Reversible construction:<ul style="padding-left: 20px; list-style-type: circle; margin-top: 5px;"><li style="margin-bottom: 5px;">Side 1: NASCAR-inspired appliqués</li><li style="margin-bottom: 5px;">Side 2: Fresco mural featuring Inferno insignia</li></ul></li><li style="margin-bottom: 10px;">Contrast color trims and accent panels</li><li style="margin-bottom: 10px;">Embroidered appliqués and detailed graphics</li></ul></div><div style="flex: 1;"><h3 style="font-weight: bold; letter-spacing: 0.1em; margin-bottom: 15px; font-size: 14px;">TECHNICAL<br>COMPOSITION</h3><ul style="padding-left: 20px; line-height: 1.6; list-style-type: disc;"><li style="margin-bottom: 10px;">100% Cotton midweight build for moderate temperatures</li><li style="margin-bottom: 10px;">Ribbed knit cuffs and waist hem</li><li style="margin-bottom: 10px;">Long sleeves, mock neck design</li><li style="margin-bottom: 10px;">Two front slip pockets</li><li style="margin-bottom: 10px;">Full snap closure, tonal hardware</li><li style="margin-bottom: 10px;">Dry clean only</li><li style="margin-bottom: 10px;">Imported</li></ul></div></div>`,
     images: [
        { title: "Contradiction Ext 360", type: "iframe", src: "Fortifications/The Contradiction/Contradiction Exterior/Contradiction Ext. 360 Autoplay.html" },
        "Fortifications/The Contradiction/Contradiction Exterior/Contradiction Ext. 1.png",
        "Fortifications/The Contradiction/Contradiction Exterior/Contradiction Ext. 2.png",
        "Fortifications/The Contradiction/Contradiction Exterior/Contradiction Ext. 3.png",
        "Fortifications/The Contradiction/Contradiction Exterior/Contradiction Ext. 4.png",
        "Fortifications/The Contradiction/Contradiction Exterior/Contradiction Ext. 5.png",
        "Fortifications/The Contradiction/Contradiction Exterior/Contradiction Ext. 6.png",
        { title: "Contradiction Rev 360", type: "iframe", src: "Fortifications/The Contradiction/Contradiction Reverse/Contradiction Rev. 360 Autoplay.html" },
        "Fortifications/The Contradiction/Contradiction Reverse/Contradiction Rev. 1.png",
        "Fortifications/The Contradiction/Contradiction Reverse/Contradiction Rev. 2.png",
        "Fortifications/The Contradiction/Contradiction Reverse/Contradiction Rev. 3.png",
        "Fortifications/The Contradiction/Contradiction Reverse/Contradiction Rev. 4.png",
        "Fortifications/The Contradiction/Contradiction Reverse/Contradiction Rev. 5.png",
        "Fortifications/The Contradiction/Contradiction Reverse/Contradiction Rev. 6.png"
     ]
  },
  {
     name: "The Intersect",
     collection: "sophisticated-ignorance",
     price: "670",
     colors: ["Multi"],
     sizes: ["S", "M", "L", "XL", "XXL"],
     description: "The worlds of asphalt and agility collide. 100% premium leather shell. Ergonomic tailoring for dynamic mobility. Branded hardware and tonal stitching.",
     images: [
        { title: "Intersect 360", type: "iframe", src: "Fortifications/The Intersect/Intersect 360.html" },
        "Fortifications/The Intersect/Intersect 1.png",
        "Fortifications/The Intersect/Intersect 2.png",
        "Fortifications/The Intersect/Intersect 3.png",
        "Fortifications/The Intersect/Intersect 4.png",
        "Fortifications/The Intersect/Intersect 5.png",
        "Fortifications/The Intersect/Intersect 6.png"
     ]
  }
];

// --- INJECTED TIER MAPPING ---
const tierMapping = {
    "The Veil": { tier: "FOUNDATIONS", tierDesc: "FOUNDATIONS SERVES AS THE BASE LAYER OF REFINEMENT; THE STEPPING STONES OF YOUR WARDROBE DESIGNED FOR STRUCTURE, COMFORT AND EVERYDAY UNIFORMITY. THROUGH SIMPLICITY AND PRECISION, FOUNDATIONS DEFINES THE ESSENTIALS. WHERE FORM TAKES SHAPE AND SOPHISTICATION BEGINS.", desc: "Protection through perception." },
    "The Cornerstone": { tier: "FOUNDATIONS", tierDesc: "FOUNDATIONS SERVES AS THE BASE LAYER OF REFINEMENT; THE STEPPING STONES OF YOUR WARDROBE DESIGNED FOR STRUCTURE, COMFORT AND EVERYDAY UNIFORMITY. THROUGH SIMPLICITY AND PRECISION, FOUNDATIONS DEFINES THE ESSENTIALS. WHERE FORM TAKES SHAPE AND SOPHISTICATION BEGINS.", desc: "Simplicity as sophistication." },
    "The Breakaway": { tier: "FOUNDATIONS", tierDesc: "FOUNDATIONS SERVES AS THE BASE LAYER OF REFINEMENT; THE STEPPING STONES OF YOUR WARDROBE DESIGNED FOR STRUCTURE, COMFORT AND EVERYDAY UNIFORMITY. THROUGH SIMPLICITY AND PRECISION, FOUNDATIONS DEFINES THE ESSENTIALS. WHERE FORM TAKES SHAPE AND SOPHISTICATION BEGINS.", desc: "Transformation in motion." },
    "The Contradiction": { tier: "FORTIFICATIONS", tierDesc: "FORTIFICATIONS REPRESENTS DEFENSE THROUGH DESIGN; LUXURIOUS GARMENTS BUILT AS ARMOR. EACH PIECE IN THIS TIER ACTS AS BOTH PROTECTION AND PROCLAMATION. CONSTRUCTED TO ENDURE, ENGINEERED TO IMPRESS.", desc: "Elegance built on chaos." },
    "The Intersect": { tier: "FORTIFICATIONS", tierDesc: "FORTIFICATIONS REPRESENTS DEFENSE THROUGH DESIGN; LUXURIOUS GARMENTS BUILT AS ARMOR. EACH PIECE IN THIS TIER ACTS AS BOTH PROTECTION AND PROCLAMATION. CONSTRUCTED TO ENDURE, ENGINEERED TO IMPRESS.", desc: "The worlds of asphalt and agility collide." }
};
window.CAROUSEL_PRODUCTS.forEach(p => {
    if (p.collection === 'sophisticated-ignorance') {
        const base = p.name.split(" - ")[0];
        if (tierMapping[base]) {
            p.tier = tierMapping[base].tier;
            p.tierDesc = tierMapping[base].tierDesc;
            p.description = tierMapping[base].desc;
        }
    }
});
// ----------------------------


      const folderData = {
        "macintosh-hd": {
          label: "Macintosh HD",
          files: [
            { name: "CIRE Canon", type: "folder", targetFolder: "cire-canon" },
            { name: "CIRE Concierge", type: "folder", targetFolder: "cire-concierge" },
            { name: "CIRE Hospitality", type: "folder", targetFolder: "cire-hospitality" },
            { name: "Sophisticated Brilliance", type: "folder", targetFolder: "sophisticated-brilliance" },
            { name: "Sophisticated Ignorance", type: "folder", targetFolder: "sophisticated-ignorance" },
            { name: "Curated Content", type: "folder", targetFolder: "curated" },
            { name: "Join Network 🤝", type: "document" }
          ]
        },
        "cire-canon": {
          label: "CIRE Canon",
          files: [
            {
              name: "the continuum",
              type: "folder",
              targetFolder: "canon-continuum",
            },
            {
              name: "the charter",
              type: "folder",
              targetFolder: "canon-charter",
            },
            {
              name: "the doctrine",
              type: "folder",
              targetFolder: "canon-doctrine",
            },
            {
              name: "the access protocols",
              type: "folder",
              targetFolder: "canon-protocols",
            },
            { name: "maison manifest", type: "folder", targetFolder: "maison" },
            {
              name: "CIRE Logo BWwoBG.png",
              type: "image",
              src: "/CIRE Logo BWwoBG.png",
            },
            { name: "art house.png", type: "image", src: "/art house.png" },
            {
              name: "fashion house.png",
              type: "image",
              src: "/fashion house.png",
            },
          ],
        },
        "cire-concierge": {
          label: "CIRE Concierge",
          files: [
            {
              name: "automotive",
              type: "folder",
              targetFolder: "concierge-automotive",
            },
            {
              name: "maritime",
              type: "folder",
              targetFolder: "concierge-maritime",
            },
          ],
        },
        "cire-hospitality": {
          label: "CIRE Hospitality",
          files: [
            {
              name: "coming soon.rfd",
              type: "document",
              textContent:
                "Exclusive access to our global hospitality network.",
            },
          ],
        },
        "canon-continuum": { label: "the continuum", files: [] },
        "canon-charter": { label: "the charter", files: [] },
        "canon-doctrine": { label: "the doctrine", files: [] },
        "canon-protocols": { label: "the access protocols", files: [] },
        "concierge-automotive": { label: "automotive", files: [] },
        "concierge-maritime": { label: "maritime", files: [] },
        "sophisticated-brilliance": {
          label: "Sophisticated Brilliance",
          files: [
            {
              name: "sophisticated brilliance.rfd",
              type: "document",
              textContent:
                "Sophisticated Brilliance is a luxury fashion and jewelry house under the CIRE Conglomerate. It represents the pinnacle of refined aesthetics and modern craftsmanship.",
            },
            {
              name: "collection narrative.rfd",
              type: "document",
              textContent:
                "The debut collection from *Sophisticated Brilliance* reinterprets sacred iconography as a reflection of the human condition via trials and revelations. Each piece examines the tension between scars and magnificence, elaborating on the paradox of endurance: suffering not only has the power to wound, but also to refine. Brilliance, in this context, is not the absence of damage, but the result of having endured it.\\n\\nAs a whole, the collection invites reflection on scars not as disfigurements, but as evidence of transformation. These works of art crafted out of precious gemstones and metals are designed to acknowledge struggle while recognizing that refinement is a process, and brilliance is achieved through endurance.",
            },
            {
              name: "collection 1 logo.mp4",
              type: "video",
              src: "/SB Rotating Logo.mp4",
            },
            {
              name: "transcendence of man",
              type: "folder",
              targetFolder: "video",
            },
          ],
        },
        "sophisticated-ignorance": {
          label: "Sophisticated Ignorance",
          files: [
            {
              name: "sophisticated ignorance.rfd",
              type: "document",
              textContent:
                "Sophisticated Ignorance is a concept brand exploring the intersection of luxury culture and intentional simplicity.",
            },
            {
              name: "power perfected in position.rfd",
              type: "document",
              textContent:
                "Every position holds potential — not as limitation, but as leverage. **Sophisticated Ignorance** is built on the belief that elevation is earned through conviction, not circumstance. Whether one begins at **Foundations** or reigns within **Crownworks**, each tier represents a stage of growth — a moment to master before advancing to the next. To wear the brand is to embrace progression: to elevate within your means, and to build power through a solid foundation and discipline. Because ascension is not promised — it's pursued. And through conviction, *Power is Perfected in Position*.\n\nAt its core, the collection is organized through a **symbolic classification system** that quietly structures the brand's universe of garments. Categories are defined by function and refinement, each occupying a distinct role within the wardrobe. The symbols that accompany them serve as markers of position and progression, not spectacle. Because power is not loud, it is precise, therefore, is perfected in position.",
            },
            {
              name: "foundations",
              type: "folder",
              targetFolder: "si-foundations",
            },
            {
              name: "fortifications",
              type: "folder",
              targetFolder: "si-fortifications",
            },
            { name: "relics", type: "folder", targetFolder: "si-relics" },
            { name: "dominion", type: "folder", targetFolder: "si-dominion" },
            {
              name: "adornments",
              type: "folder",
              targetFolder: "si-adornments",
            },
            {
              name: "crownworks",
              type: "folder",
              targetFolder: "si-crownworks",
            },
          ],
        },
        "si-foundations": {
          label: "foundations",
          files: [
            {
              name: "foundations.rfd",
              type: "document",
              textContent:
                "Foundations — The Architecture of Self\nEstablish identity and structure — the groundwork of sophistication.\n\nFoundations serves as the base layer of refinement: the stepping stones of your wardrobe, designed for structure, comfort, and everyday uniformity. Through simplicity and precision, Foundations defines the essentials that ground identity — where form takes shape and sophistication begins.",
            },],
        },
        "si-fortifications": {
          label: "fortifications",
          files: [
            {
              name: "fortifications.rfd",
              type: "document",
              textContent:
                "Fortifications — The Shield of Style\nProtect, reinforce, and define.\n\nFortifications represents defense through design — luxurious garments built as armor. Each piece in this tier acts as both protection and proclamation — constructed to endure, engineered to impress.",
            },],
        },
        "si-relics": {
          label: "relics",
          files: [
            {
              name: "relics.rfd",
              type: "document",
              textContent:
                "Relics — The Creed of Craft\nCarry heirlooms that endure — crafted in devotion to quality.\n\nRelics serve as the tactile memory of the brand: timeless leather goods that embody strength through subtlety and refinement through utility. Each piece is designed to be carried, aged, and remembered.",
            },],
        },
        "si-dominion": {
          label: "dominion",
          files: [
            {
              name: "dominion.rfd",
              type: "document",
              textContent:
                "Dominion — The Path of Conquest\nStride with intent. Advance with purpose.",
            },],
        },
        "si-adornments": {
          label: "adornments",
          files: [
            {
              name: "adornments.rfd",
              type: "document",
              textContent:
                "Adornments — The Reign of Detail\nElevate your expression. Define your distinction.",
            },],
        },
        "si-crownworks": {
          label: "crownworks",
          files: [
            {
              name: "crownworks.rfd",
              type: "document",
              textContent:
                "Crownworks — The Pinnacle of Refinement\nThe ultimate articulation of mastery and rule.\n\nCrownworks represents the embodiment of power perfected in presentation: garments crafted for moments of command, ceremony, and consequence. Each creation in this tier signifies composure under pressure — the discipline to remain regal, the elegance to move with authority.",
            },],
        },
        video: {
          label: "transcendence of man",
          files: [
            { name: "sketches", type: "folder", targetFolder: "tom-sketches" },
            {
              name: "renderings",
              type: "folder",
              targetFolder: "tom-renderings",
              protected: true,
            },
            { name: "final", type: "folder", targetFolder: "tom-final" },

          ],
        },
        "tom-sketches": {
          label: "sketches",
          files: [
            {
              name: "sketch: beast.png",
              type: "image",
              src: "/beast-jp.png",
            },
            {
              name: "sketch: metamorphosis.png",
              type: "image",
              src: "/Metamorphosis.png",
            },
            {
              name: "sketch: humble.png",
              type: "image",
              src: "/humble-jp.png",
            },
            {
              name: "sketch: celestial scars.png",
              type: "image",
              src: "/Crater Cuban Concept.PNG",
            },
            {
              name: "sketch: the nails.png",
              type: "image",
              src: "/Earring Sketch.PNG",
            },
          ],
        },

        "tom-renderings": {
          label: "renderings",
          files: [
            {
              name: "rendering: beast.mp4",
              type: "video",
              src: "/rendering: beast.mp4",
            },
            {
              name: "rendering: metamorphosis.mp4",
              type: "video",
              src: "/rendering: metamorphosis.mp4",
            },
            {
              name: "rendering: humble.mp4",
              type: "video",
              src: "/rendering: humble.mp4",
            },
            {
              name: "rendering: celestial scars.mp4",
              type: "video",
              src: "/rendering: celestial scars.mp4",
            },
            {
              name: "rendering: the nails.mp4",
              type: "video",
              src: "/rendering: the nails.mp4",
            },
            {
              name: "transcendence of man.mp4",
              type: "video",
              src: "/transcendence of man.mp4",
            },
          ],
        },

        "tom-final": {
          label: "final",
          files: [
            {
              name: "final: beast.mp4",
              type: "video",
              src: "/final: beast.mp4",
            },
            {
              name: "final: metamorphosis.mp4",
              type: "video",
              src: "/final: metamorphosis.mp4",
            },
            {
              name: "final: humble.mp4",
              type: "video",
              src: "/final: humble.mp4",
            },
            {
              name: "final: celestial scars.mp4",
              type: "video",
              src: "/final: celestial scars.mp4",
            },
            {
              name: "final: the nails.mp4",
              type: "video",
              src: "/final: the nails.mp4",
            },
          ],
        },
        maison: {
          label: "maison manifest",
          files: [
            {
              name: "maison overview.rfd",
              type: "document",
              textContent:
                "CIRE Conglomerate is a visionary, multidisciplinary luxury house bridging high jewelry, art, fashion, and private client services into a cohesive expression of contemporary sophistication. Built on the philosophy of <i>cultivating influence</i>, <i>refinement</i>, and <i>excellence</i>, CIRE operates as both creative institution and intellectual holding company: a system where craftsmanship, culture, and aspiration converge. Serving as the parent entity to <b>Sophisticated Brilliance</b> and <b>Sophisticated Ignorance</b>.",
            },
            {
              name: "sophisticated brilliance.rfd",
              type: "document",
              textContent:
                "Sophisticated Brilliance is a luxury fashion and jewelry house under the CIRE Conglomerate. It represents the pinnacle of refined aesthetics and modern craftsmanship.",
            },
            {
              name: "sophisticated ignorance.rfd",
              type: "document",
              textContent:
                "Sophisticated Ignorance is a concept brand exploring the intersection of luxury culture and intentional simplicity.",
            },
            { name: "coming soon.mp4", type: "video", src: "/coming soon.mp4" },
          ],
        },
        curated: {
          label: "Curated Content",
          files: Array.from({ length: 9 }).map((_, i) => ({
            name: `TikTok Repost ${9 - i}.link`,
            type: "document",
            textContent: `[View on TikTok](https://www.tiktok.com/@thesophisticatedignorant)\\n\\nThis is a curated repost.`,
          })),
        },
      };

      if (window.CONCIERGE_INVENTORY) {
        folderData["concierge-automotive"].files = window.CONCIERGE_INVENTORY.filter(
          (d) => d.category === "automotive",
        ).map((d) => ({
          name: d.name,
          type: "image",
          src: d.image,
          tags: d.requirements || [],
        }));
        folderData["concierge-maritime"].files = window.CONCIERGE_INVENTORY.filter(
          (d) => d.category === "maritime",
        ).map((d) => ({
          name: d.name,
          type: "image",
          src: d.image,
          tags: d.requirements || [],
        }));
      }

      let selectedFolder = "macintosh-hd";
      let currentView = "columns";
      let selectedGalleryIndex = 0;
      let selectedColumnIndex = -1;

      // Navigation history for back/forward buttons
      let navigationHistory = ["cire-canon"]; // Start with initial folder
      let historyIndex = 0; // Current position in history

      const desktop = document.getElementById("desktop");
      const finderWindow = document.getElementById("finder-window");
      const sidebar = document.getElementById("sidebar");
      const contentArea = document.getElementById("content-area");
      const windowTitle = document.getElementById("window-title");
      const itemCount = document.getElementById("item-count");
      const themeToggle = document.getElementById("theme-toggle");

      // Theme toggle
      themeToggle.addEventListener("change", (e) => {
        if (e.target.checked) {
          document.body.classList.add("light-mode");
        } else {
          document.body.classList.remove("light-mode");
        }
      });

      // Bring finder window to front when clicked
      finderWindow.addEventListener("mousedown", () => {
        highestZIndex++;
        finderWindow.style.zIndex = highestZIndex;
      });
      const viewBtn = document.getElementById("view-btn");
      const viewMenu = document.getElementById("view-menu");
      const viewIcon = document.getElementById("view-icon");
      const viewLabel = document.getElementById("view-label");
      const shareBtn = document.getElementById("share-btn");
      const tagsBtn = document.getElementById("tags-btn");
      const tagsMenu = document.getElementById("tags-menu");
      const clipboardNotification = document.getElementById(
        "clipboard-notification",
      );

      // Popup window management
      let highestZIndex = 100;
      let currentMobileOrder = 0;

      // Global keydown for navigation
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          const modal = document.getElementById("product-detail-modal");
          if (modal && modal.style.display === "flex") {
            closeProductDetail();
            return;
          }
          // Specifically restricted Escape to ONLY product-detail-modal per user request.
          // It will no longer close popup-windows to enforce interaction and close button (X).
        }

        // Check if any input is focused
        if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")
          return;

        const files = folderData[selectedFolder]?.files || [];
        if (files.length === 0) return;
        
        // Prevent interaction with contents if the folder itself is locked
        if (!isSystemUnlocked && isItemProtected(selectedFolder)) return;

        if (currentView === "gallery") {
          if (e.key === "ArrowRight" || e.key === "ArrowDown") {
            e.preventDefault();
            let newIndex = selectedGalleryIndex + 1;
            if (newIndex >= files.length) newIndex = files.length - 1;
            selectedGalleryIndex = newIndex;
            selectedFile = files[newIndex];
            updateGalleryDOM(newIndex);
            scrollItemIntoView(newIndex);
          } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
            e.preventDefault();
            let newIndex = selectedGalleryIndex - 1;
            if (newIndex < 0) newIndex = 0;
            selectedGalleryIndex = newIndex;
            selectedFile = files[newIndex];
            updateGalleryDOM(newIndex);
            scrollItemIntoView(newIndex);
          } else if (e.key === "Enter") {
            const file = files[selectedGalleryIndex];
            if (file) {
              if (file.type === "folder") {
                selectFolder(file.targetFolder);
              } else {
                handleFileDoubleClick(file.name.replace(/\.png$/, ""));
              }
            }
          }
        } else {
          let cols = 1;
          if (currentView === "icons") {
            const items = document.querySelectorAll(".icon-view-item");
            if (items.length > 1) {
              const top0 = items[0].offsetTop;
              for (let i = 1; i < items.length; i++) {
                if (items[i].offsetTop > top0) {
                  cols = i;
                  break;
                }
              }
              if (cols === 1 && items[1].offsetTop === top0) {
                cols = items.length;
              }
            }
          }

          if (e.key === "ArrowRight") {
            e.preventDefault();
            let newIndex = selectedColumnIndex + 1;
            if (newIndex >= files.length) newIndex = files.length - 1;
            selectColumnItem(newIndex);
            scrollItemIntoView(newIndex);
          } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            let newIndex = selectedColumnIndex - 1;
            if (newIndex < 0) newIndex = 0;
            selectColumnItem(newIndex);
            scrollItemIntoView(newIndex);
          } else if (e.key === "ArrowDown") {
            e.preventDefault();
            let newIndex =
              selectedColumnIndex + (currentView === "icons" ? cols : 1);
            if (newIndex >= files.length) newIndex = files.length - 1;
            selectColumnItem(newIndex);
            scrollItemIntoView(newIndex);
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            let newIndex =
              selectedColumnIndex - (currentView === "icons" ? cols : 1);
            if (newIndex < 0) return; // Do not jump to 0 if we hit the ceiling
            selectColumnItem(newIndex);
            scrollItemIntoView(newIndex);
          } else if (e.key === "Enter") {
            if (
              selectedColumnIndex >= 0 &&
              selectedColumnIndex < files.length
            ) {
              const file = files[selectedColumnIndex];
              if (file.type === "folder") {
                selectFolder(file.targetFolder);
              } else {
                handleFileDoubleClick(file.name.replace(/\.png$/, ""));
              }
            }
          }
        }
      });

      function scrollItemIntoView(index) {
        let selector = ".column-item";
        if (currentView === "list") selector = ".list-item";
        if (currentView === "icons") selector = ".icon-view-item";
        if (currentView === "gallery") selector = ".gallery-thumbnail";
        const items = document.querySelectorAll(selector);
        if (items[index]) {
          items[index].scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "smooth",
          });
        }
      }

      // Popup ID to display name mapping for dock
      const popupTitles = {
        "popup-maison": "Maison Overview",
        "popup-brilliance": "Sophisticated Brilliance",
        "popup-ignorance": "Sophisticated Ignorance",
        "popup-transcendence": "Transcendence of Man",
        "popup-sb-logo": "SB Collection 1 Logo",
        "popup-guestbook": "Join Network 🤝",
      };

      function openPopup(popupId, updateHistory = true) {
        const popup = document.getElementById(popupId);
        if (popup) {
          if (updateHistory) {
            const url = new URL(window.location);
            url.searchParams.set('window', popupId);
            window.history.pushState({ popupId }, '', url);
          }
          // Remove from dock if minimized
          const dockItem = document.querySelector(
            `.dock-item[data-popup="${popupId}"]`,
          );
          if (dockItem) dockItem.remove();

          // Show popup
          popup.classList.add("active");

          // Play any video inside the popup
          const vid = popup.querySelector('video');
          if (vid) {
            vid.play().catch(e => console.log("Video play prevented", e));
          }
          
          if (window.innerWidth <= 768) {
            // Move popup to top of desktop
            const desktop = document.getElementById("desktop");
            const toggleContainer = desktop.querySelector(".toggle-container");
            if (toggleContainer && toggleContainer.nextSibling) {
              desktop.insertBefore(popup, toggleContainer.nextSibling);
            } else {
              desktop.prepend(popup);
            }
            // Add a small delay for smooth scrolling to take effect after DOM move
            setTimeout(() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              document.documentElement.scrollTop = 0;
              document.body.scrollTop = 0;
            }, 50);
          }

          // Center popup
          const popupWidth =
            popup.offsetWidth ||
            parseInt(window.getComputedStyle(popup).width) ||
            550;
            
          popup.style.left = Math.max(0, (window.innerWidth - popupWidth) / 2) + "px";

          if (popupId === "popup-restricted") {
            const popupHeight = popup.offsetHeight || parseInt(window.getComputedStyle(popup).height) || 200;
            popup.style.top = Math.max(0, (window.innerHeight - popupHeight) / 2) + "px";
            popup.style.transform = "none";
          } else {
            popup.style.top = "100px";
            popup.style.transform = "none";
          }

          // Bring to front
          highestZIndex++;
          popup.style.zIndex = highestZIndex;

          // Reset popup content scroll
          const content = popup.querySelector('.popup-content');
          if (content) content.scrollTop = 0;



          // Enforce Graphite Mode for Guestbook PERMANENTLY
          if (popupId === "popup-guestbook") {
            if (!popup.classList.contains("graphite-mode")) {
              popup.classList.add("graphite-mode");
            }
            // Initialize the Leaflet map once the popup is visible
            setTimeout(() => {
              if (typeof window.initGuestbookMap === "function") {
                window.initGuestbookMap();
              }
              if (window.wwnMap) {
                window.wwnMap.invalidateSize();
              }
            }, 300);
          }
        }
      }

      function updateGalleryDOM(index) {
        const files = folderData[selectedFolder]?.files || [];
        const selectedFile = files[index];
        if (!selectedFile) return;

        // Update thumbnails visually
        document.querySelectorAll(".gallery-thumbnail").forEach((thumb, i) => {
          if (i === index) thumb.classList.add("selected");
          else thumb.classList.remove("selected");
        });

        // Update preview
        const previewContainer = document.querySelector(
          ".gallery-preview-content",
        );
        if (previewContainer) {
          let isFileLocked =
            !isSystemUnlocked && isItemProtected(selectedFile.name);
          if (isFileLocked) {
            previewContainer.innerHTML = `
                        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; background: transparent; padding: 20px; box-sizing: border-box; text-align: center; overflow: hidden; height: 100%;">
                            <i class="fas fa-lock lock-icon" style="font-size: 32px; color: #636366; margin-bottom: 12px;"></i>
                            <h2 style="font-size: 15px; font-weight: 500; margin-bottom: 6px; color: #fff;">This file is locked.</h2>
                            <p style="font-size: 11px; color: #888; margin-bottom: 16px; max-width: 100%;">Enter password</p>
                            <input type="password" placeholder="••••••••" onkeypress="checkSystemPassword(event)" style="background: rgba(255,255,255,0.05); border: 1px solid #3a3a3c; border-radius: 8px; padding: 6px 10px; width: 100%; max-width: 160px; color: white; outline: none; font-family: 'Courier New', monospace; text-align: center; font-size: 12px; box-sizing: border-box;">
                        </div>`;
          } else if (selectedFile.type === "image" && selectedFile.src) {
            previewContainer.innerHTML = `<img src="${
              selectedFile.src
            }" style="width: 100%; height: 100%; object-fit: contain; border-radius: 4px;" ondblclick="handleFileDoubleClick('${selectedFile.name.replace(
              /\.png$/,
              "",
            )}')">`;
          } else if (selectedFile.type === "video" && selectedFile.src) {
            previewContainer.innerHTML = `<video src="${
              selectedFile.src
            }" style="width: 100%; height: 100%; object-fit: contain; border-radius: 4px;" autoplay muted loop playsinline ondblclick="handleFileDoubleClick('${selectedFile.name.replace(
              /\.png$/,
              "",
            )}')"></video>`;
          } else {
            const icon = getFileIcon(selectedFile.type, selectedFile.name);
            previewContainer.innerHTML = `<i class="${
              icon.class
            }" style="color: ${
              icon.color
            }; cursor: pointer;" ondblclick="handleFileDoubleClick('${selectedFile?.name.replace(
              /\\.png$/,
              "",
            )}')"></i>`;
          }
        }

        // Update info
        const nameEl = document.querySelector(".gallery-info .info-name");
        if (nameEl)
          nameEl.textContent = selectedFile.name.replace(/\.png$/, "");
      }

      function closePopup(popupId, updateHistory = true) {
        const popup = document.getElementById(popupId);
        if (popup) {
          popup.classList.remove("active");
          popup.classList.remove("graphite-mode"); // Exit fullscreen
          
          if (updateHistory) {
            const activePopups = Array.from(document.querySelectorAll('.popup.active')).filter(p => p.id !== popupId);
            const url = new URL(window.location);
            if (activePopups.length > 0) {
              let topPopup = activePopups[0];
              let maxZ = parseInt(window.getComputedStyle(topPopup).zIndex) || 0;
              for (let i = 1; i < activePopups.length; i++) {
                let z = parseInt(window.getComputedStyle(activePopups[i]).zIndex) || 0;
                if (z > maxZ) {
                  maxZ = z;
                  topPopup = activePopups[i];
                }
              }
              url.searchParams.set('window', topPopup.id);
            } else {
              url.searchParams.delete('window');
            }
            window.history.pushState(null, '', url);
          }

          // Pause any video inside the popup
          const vid = popup.querySelector('video');
          if (vid) {
            vid.pause();
          }

          // Remove from dock if present
          const dockItem = document.querySelector(
            `.dock-item[data-popup="${popupId}"]`,
          );
          if (dockItem) dockItem.remove();

          // Reset Position to defaults (Differs from minimize)
          const centerX = window.innerWidth / 2;

          if (popupId === "popup-maison") {
            popup.style.left = centerX - 150 + "px";
            popup.style.top = "18px";
            popup.style.width = "450px";
            popup.style.height = "auto";
          } else if (popupId === "popup-transcendence") {
            popup.style.left = centerX - 376 + "px";
            popup.style.top = "69px";
          } else if (popupId === "popup-brilliance") {
            popup.style.left = centerX - 330 + "px";
            popup.style.top = "202px";
          } else if (popupId === "popup-ignorance") {
            popup.style.left = centerX + 34 + "px";
            popup.style.top = "285px";
          } else if (popupId === "popup-guestbook") {
            popup.style.left = centerX - 125 + "px";
            popup.style.top = "100px";
          }
        }
      }

      function minimizePopup(popupId) {
        const popup = document.getElementById(popupId);
        if (popup) {
          // Toggle minimized state
          if (popup.classList.contains("minimized")) {
            popup.classList.remove("minimized");
          } else {
            popup.classList.add("minimized");
          }
        }
      }

      function restorePopup(popupId) {
        const popup = document.getElementById(popupId);
        if (popup && popup.classList.contains("minimized")) {
          popup.classList.remove("minimized");
        }
      }

      // Store for pre-graphite state
      const popupPreGraphiteState = {};

      function toggleGraphiteMode(popupId) {
        const popup = document.getElementById(popupId);
        if (!popup) return;

        // Lock Graphite Mode for Guestbook (Prevent toggle)
        if (popupId === "popup-guestbook") return;

        if (popup.classList.contains("graphite-mode")) {
          // Restore from graphite mode
          popup.classList.remove("graphite-mode");
          const pre = popupPreGraphiteState[popupId];
          if (pre) {
            popup.style.left = pre.left;
            popup.style.top = pre.top;
            popup.style.width = pre.width;
            popup.style.height = pre.height;
          }

          // Reset video if present
          const video = popup.querySelector("video");
          if (video) {
            video.style.height = "300px";
            video.style.objectFit = "cover";
          }

          // Reset content height
          const content = popup.querySelector(".popup-content");
          if (
            content &&
            (popupId === "popup-sb-logo" ||
              popupId === "popup-transcendence" ||
              popupId === "popup-coming-soon")
          ) {
            content.style.height = "auto";
          }
        } else {
          // Enter graphite mode - save current state
          popupPreGraphiteState[popupId] = {
            left: popup.style.left,
            top: popup.style.top,
            width: popup.style.width,
            height: popup.style.height,
          };
          popup.classList.add("graphite-mode");
          popup.style.left = "0";
          popup.style.top = "0";
          popup.style.width = "100vw";
          popup.style.height = "100vh";

          // Adjust video for full screen
          const video = popup.querySelector("video");
          if (video) {
            video.style.height = "100%";
            video.style.objectFit = "cover";
          }

          // Force content to fill height for video popups
          const content = popup.querySelector(".popup-content");
          if (
            content &&
            (popupId === "popup-sb-logo" ||
              popupId === "popup-transcendence" ||
              popupId === "popup-coming-soon")
          ) {
            content.style.height = "calc(100% - 32px)";
          }
        }
      }

      // File to popup mapping (for documents that open existing popups)
      const filePopupMap = {
        "maison overview.rfd": "popup-maison",
        "coming soon.mp4": "popup-coming-soon",
        "join network 🤝.rfd": "popup-guestbook",
      };

      // Folder to popup mapping
      const folderPopupMap = {
        "sophisticated-brilliance": "popup-brilliance",
        "sophisticated-ignorance": "popup-ignorance",
      };

      // Select column item (single click) - shows preview
      function selectColumnItem(index) {
        const files = folderData[selectedFolder]?.files || [];
        const selectedFile = files[index];
        if (selectedFile && (selectedFile.name === "Join Network 🤝" || selectedFile.name === "join network 🤝")) {
            openPopup("popup-guestbook");
            return;
        }

        if (window.innerWidth <= 768) {
            if (selectedFile) {
                if (selectedFile.type === "folder") {
                    selectFolder(selectedFile.targetFolder);
                } else {
                    handleFileDoubleClick(selectedFile.name.replace(/\.png$/, ""));
                }
            }
            return;
        }

        selectedColumnIndex = index;
        let selector = ".column-item";
        if (currentView === "list") selector = ".list-item";
        if (currentView === "icons") selector = ".icon-view-item";
        const items = document.querySelectorAll(selector);
        items.forEach((item, i) => {
          item.classList.toggle("selected", i === index);
        });
        updateColumnPreview();
      }

      // Update only the column preview panel
      function updateColumnPreview() {
        const files = folderData[selectedFolder]?.files || [];
        const selectedFile =
          selectedColumnIndex >= 0 ? files[selectedColumnIndex] : null;
        const selectedIcon = selectedFile
          ? getFileIcon(selectedFile.type, selectedFile.name)
          : null;
        const fileTypeLabel = selectedFile
          ? selectedFile.type === "image"
            ? "PNG image"
            : selectedFile.type === "video"
            ? "MPEG-4 Video"
            : "Document"
          : "";

        let isFileLocked =
          selectedFile &&
          !isSystemUnlocked &&
          isItemProtected(selectedFile.name);

        let previewContent = "";
        if (isFileLocked) {
          previewContent = `
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; background: transparent; padding: 20px; box-sizing: border-box; text-align: center; overflow: hidden; height: 100%;">
                        <i class="fas fa-lock lock-icon" style="font-size: 32px; color: #636366; margin-bottom: 12px;"></i>
                        <h2 style="font-size: 15px; font-weight: 500; margin-bottom: 6px; color: #fff;">This file is locked.</h2>
                        <p style="font-size: 11px; color: #888; margin-bottom: 16px; max-width: 100%;">Enter password</p>
                        <input type="password" placeholder="••••••••" onkeypress="checkSystemPassword(event)" style="background: transparent; border: 1px solid #3a3a3c; border-radius: 8px; padding: 6px 10px; width: 100%; max-width: 160px; color: white; outline: none; font-family: 'Courier New', monospace; text-align: center; font-size: 12px; box-sizing: border-box;">
                    </div>
                `;
        } else if (selectedFile?.type === "image" && selectedFile?.src) {
          previewContent = `<img src="${selectedFile.src}" style="width: 100%; height: 100%; object-fit: contain; background: #1a1a1a;">`;
        } else if (selectedFile?.type === "video" && selectedFile?.src) {
          previewContent = `<video src="${selectedFile.src}" style="width: 100%; height: 100%; object-fit: contain;" autoplay muted loop playsinline></video>`;

        } else if (selectedFile) {
          previewContent = `<i class="${selectedIcon.class}" style="font-size: 64px; color: ${selectedIcon.color}"></i>`;
        }

        const previewPanel = document.querySelector(".column-preview");
        if (previewPanel) {
          previewPanel.innerHTML = selectedFile
            ? `
                    <div class="column-preview-image">
                        ${previewContent}
                    </div>
                    <div class="column-preview-header">
                        <div class="column-preview-name">${selectedFile.name.replace(
                          /\.png$/,
                          "",
                        )}</div>
                        <div class="column-preview-type">${fileTypeLabel} - 256 KB</div>
                    </div>
                    <div class="gallery-info-section">
                        <div class="gallery-info-section-title">
                            Information
                            <span class="show-more">Show Less</span>
                        </div>
                        <div class="gallery-info-row">
                            <span class="label">Created</span>
                            <span class="value">Today, 02:42</span>
                        </div>
                        <div class="gallery-info-row">
                            <span class="label">Modified</span>
                            <span class="value">Today, 02:42</span>
                        </div>
                        <div class="gallery-info-row">
                            <span class="label">Last opened</span>
                            <span class="value">Today, 02:42</span>
                        </div>
                        <div class="gallery-info-row">
                            <span class="label">Content created</span>
                            <span class="value">Today, 02:42</span>
                        </div>
                    </div>
                    <div class="gallery-info-section">
                        <div class="gallery-info-section-title">Tags</div>
                        <div style="color: #888; font-size: 12px; padding: 5px 0;">Add Tags...</div>
                    </div>
                    <div class="gallery-actions">
                        <div class="gallery-action-btn">
                            <i class="fas fa-undo"></i>
                            <span>Rotate Left</span>
                        </div>
                        <div class="gallery-action-btn">
                            <i class="fas fa-marker"></i>
                            <span>Markup</span>
                        </div>
                        <div class="gallery-action-btn">
                            <i class="fas fa-ellipsis-h"></i>
                            <span>More...</span>
                        </div>
                    </div>
                `
            : `
                    <div class="column-preview-empty" style="display: flex; align-items: center; justify-content: center; height: 100%; color: #888;">
                        Select a file to preview
                    </div>
                `;
        }
      }

      function handleFileClick(fileName) {
        // Check if it's a folder - navigate to it
        const currentFiles = folderData[selectedFolder]?.files || [];
        const clickedFile = currentFiles.find(
          (f) =>
            f.name === fileName || f.name.replace(/\.png$/, "") === fileName,
        );

        // Protection Check
        if (!isSystemUnlocked && isItemProtected(fileName)) {
          if (currentView !== "columns") {
            currentView = "columns";
            selectedColumnIndex = currentFiles.findIndex(
              (f) =>
                f.name === fileName ||
                f.name.replace(/\.png$/, "") === fileName,
            );

            // Update toolbar buttons visually
            document
              .querySelectorAll(".view-btn")
              .forEach((b) => b.classList.remove("active"));
            const colsBtn = document
              .querySelector(".fa-columns")
              ?.closest(".view-btn");
            if (colsBtn) colsBtn.classList.add("active");

            populateContent();
          }
          return;
        }

        if (currentView === "columns" || currentView === "gallery") {
          if (
            clickedFile &&
            clickedFile.type === "folder" &&
            clickedFile.targetFolder
          ) {
            selectFolder(clickedFile.targetFolder);
            return;
          }
        }

        // Highlight it using single click logic
        handleFileSingleClick(fileName);
      }

      function handleFileSingleClick(fileName) {
        if (fileName === "Join Network 🤝" || fileName === "join network 🤝") {
          openPopup("popup-guestbook");
          return;
        }
        
        const currentFiles = folderData[selectedFolder]?.files || [];
        const index = currentFiles.findIndex(
            (f) =>
              f.name === fileName || f.name.replace(/\.png$/, "") === fileName,
          );
        const clickedFile = currentFiles[index];

        if (clickedFile) {
          if (window.innerWidth <= 768) {
            if (clickedFile.type === "folder") {
                selectFolder(clickedFile.targetFolder);
            } else {
                handleFileDoubleClick(clickedFile.name.replace(/\.png$/, ""));
            }
            return;
          }

          selectedFile = clickedFile;
          selectedColumnIndex = index;

          // Highlight in icon and list view
          document
            .querySelectorAll(".icon-view-item, .list-item")
            .forEach((el) => el.classList.remove("selected"));
          document
            .querySelectorAll(".icon-view-item, .list-item")
            .forEach((el) => {
              const textContent = el.textContent || el.innerText;
              if (textContent.includes(fileName)) {
                el.classList.add("selected");
              }
            });
        }
      }

      window.toggleAdditionalDrivers = function () {
        const el = document.getElementById("inq-has-additional-drivers");
        if (el) {
          document.getElementById(
            "additional-drivers-container",
          ).style.display = el.value === "Yes" ? "flex" : "none";
        }
      };

      window.toggleDelivery = function () {
        const el = document.getElementById("inq-delivery");
        const label = document.getElementById("location-label");
        if (el && label) {
          if (el.value === "Yes") {
            label.innerText = "Delivery Location";
          } else {
            label.innerText = "Pickup/Dropoff Location";
          }
        }
      };

      window.handleFileDoubleClick = function (fileName) {
        const currentFiles = folderData[selectedFolder]?.files || [];
        const clickedFile = currentFiles.find(
          (f) =>
            f.name === fileName || f.name.replace(/\.png$/, "") === fileName,
        );

        if (
          clickedFile &&
          clickedFile.type === "folder" &&
          clickedFile.targetFolder
        ) {
          selectFolder(clickedFile.targetFolder);
          return;
        }

        window.history.pushState({}, '', '?file=' + encodeURIComponent(fileName));

        // RFD Document triggers
        if (fileName === "Join Network 🤝" || fileName === "join network 🤝") {
          openPopup("popup-guestbook");
          return;
        }
        if (fileName === "maison overview.rfd") {
          openPopup("popup-maison");
          return;
        }
        if (fileName === "private inquiry.rfd") {
          openPopup("popup-inquiry");
          return;
        }
        if (fileName === "sophisticated brilliance.rfd") {
          openPopup("popup-brilliance");
          return;
        }
        if (fileName === "sophisticated ignorance.rfd") {
          openPopup("popup-ignorance");
          return;
        }
        if (fileName === "power perfected in position.rfd") {
          openPopup("popup-power");
          return;
        }
        if (fileName === "foundations.rfd") {
          openPopup("popup-foundations");
          return;
        }
        if (fileName === "fortifications.rfd") {
          openPopup("popup-fortifications");
          return;
        }
        if (fileName === "relics.rfd") {
          openPopup("popup-relics");
          return;
        }
        if (fileName === "dominion.rfd") {
          openPopup("popup-dominion");
          return;
        }
        if (fileName === "adornments.rfd") {
          openPopup("popup-adornments");
          return;
        }
        if (fileName === "crownworks.rfd") {
          openPopup("popup-crownworks");
          return;
        }
        if (fileName === "coming soon.mp4") {
          openPopup("popup-coming-soon");
          return;
        }
        if (fileName === "transcendence of man.rfd") {
          openPopup("popup-trials");
          return;
        }
        if (fileName === "collection overview.rfd") {
          openPopup("popup-collection-overview");
          return;
        }
        if (fileName === "beast.rfd") {
          openPopup("popup-beast");
          return;
        }
        if (fileName === "metamorphosis.rfd") {
          openPopup("popup-metamorphosis");
          return;
        }
        if (fileName === "humble.rfd") {
          openPopup("popup-humble");
          return;
        }
        if (fileName === "the nails.rfd") {
          openPopup("popup-nails");
          return;
        }
        if (fileName === "celestial scars.rfd") {
          openPopup("popup-celestial");
          return;
        }

        // Video trigger
        if (fileName === "transcendence of man.mp4") {
          openPopup("popup-transcendence");
          return;
        }

        // SB Logo video trigger
        if (fileName === "logo.mp4" || fileName === "collection 1 logo.mp4") {
          openPopup("popup-sb-logo");
          return;
        }

        if (fileName === "collection narrative.rfd") {
          openPopup("popup-collection-overview");
          return;
        }

        // Image popup (dynamic)
        const baseName = fileName.replace(/\.png$/, "");
        const autoFile = folderData["concierge-automotive"]?.files?.find(
          (f) => f.name.replace(/\.png$/, "") === baseName,
        );
        const maritimeFile = folderData["concierge-maritime"]?.files?.find(
          (f) => f.name.replace(/\.png$/, "") === baseName,
        );
        if (autoFile || maritimeFile) {
          const productData = window.CONCIERGE_INVENTORY?.find(
            (d) => d.name === fileName || d.name + ".png" === fileName,
          );
          if (productData) {
            window.currentShowroomData = [productData];
            openProductDetail(0, productData.category);
            return;
          }
        }

        if (clickedFile && (clickedFile.type === "image" || clickedFile.type === "video")) {
          // Use src from file data if available, otherwise construct from filename
          const imgSrc = clickedFile.src ? clickedFile.src : "/" + clickedFile.name;
          openImagePopup(clickedFile.name.replace(/\.png$/, ""), imgSrc);
          return;
        }

        // Link trigger
        if (fileName.endsWith(".link")) {
          window.open(
            "https://www.tiktok.com/@thesophisticatedignorant",
            "_blank",
          );
          return;
        }

        // Fallback to filePopupMap
        const popupId = filePopupMap[fileName];
        if (popupId) {
          openPopup(popupId);
        }
        // remove the last closing brace
      };

      // Dynamic image popup
      function openImagePopup(title, src) {
        window.history.pushState({}, '', '?file=' + encodeURIComponent(title));
        const popupId = "popup-" + title.replace(/[^a-zA-Z0-9]/g, "-");
        let popup = document.getElementById(popupId);

        if (popup) {
          // Already exists - bring to front
          popup.classList.add("active");
          highestZIndex++;
          popup.style.zIndex = highestZIndex;
          return;
        }

        // Create new popup
        popup = document.createElement("div");
        popup.id = popupId;
        popup.className = "popup-window active";
        const isVideo = src.endsWith(".mp4") || src.endsWith(".mov");
        const mediaHtml = isVideo ? 
            `<video src="${src}" style="max-width: 100%; display: block;" autoplay muted loop playsinline></video>` : 
            `<img src="${src}" style="max-width: 100%; display: block;">`;
            
        popup.innerHTML = `
                <div class="popup-titlebar">
                    <div class="popup-controls">
                        <span class="popup-control close" onclick="closeImagePopup('${popupId}')"></span>
                        <span class="popup-control minimize" onclick="minimizePopup('${popupId}')"></span>
                        <span class="popup-control maximize" onclick="toggleGraphiteMode('${popupId}')"></span>
                    </div>
                    <span class="popup-title">${title}</span>
                    <span class="popup-share-icon" title="Share Link" onclick="copyShareUrl('file', '${title}', this)"><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
                </div>
                <div class="popup-content" style="padding: 0; background: #1a1a1a; display: flex; align-items: center; justify-content: center;">
                    ${mediaHtml}
                </div>
            `;
        
        // Remove padding-bottom
        popup.style.paddingBottom = "0px";

        if (title.toLowerCase().startsWith("sketch")) {
            const titleLower = title.toLowerCase();
            const isGroup1 = titleLower.includes("humble") || titleLower.includes("metamorphosis") || titleLower.includes("beast");
            const isGroup2 = titleLower.includes("nails") || titleLower.includes("celestial scars");
            
            if (isGroup1) {
                popup.style.width = "450px";
                popup.style.height = "600px";
                const popupContent = popup.querySelector('.popup-content');
                if (popupContent) {
                  popupContent.style.background = "#fff";
                }
            } else if (isGroup2) {
                popup.style.width = "600px";
                popup.style.height = "628px";
                const popupContent = popup.querySelector('.popup-content');
                if (popupContent) {
                  popupContent.style.background = "#fff";
                }
            } else {
                popup.style.width = "400px";
                popup.style.height = "550px";
            }

            const img = popup.querySelector("img");
            if (img) {
                img.style.width = "100%";
                img.style.height = "100%";
                img.style.objectFit = isGroup2 ? "contain" : "cover";
                img.style.display = "block";
            }
        }

        if (!isVideo && !title.toLowerCase().startsWith("sketch")) {
            // Apply uniform dimensions for non-sketch images using object-fit contain to prevent cutoff
            const img = popup.querySelector('img');
            if (img) {
                img.style.width = "100%";
                img.style.height = "auto";
                img.style.maxHeight = "70vh";
                img.style.objectFit = "contain";
            }
        }

        // Position - match Transcendence window sizing (320px width)
        popup.style.left = window.innerWidth / 2 - 160 + "px";
        popup.style.top = "100px";
        popup.style.width = "320px";

        if (window.innerWidth <= 768) {
            const desktop = document.getElementById("desktop");
            const toggleContainer = desktop.querySelector(".toggle-container");
            if (toggleContainer && toggleContainer.nextSibling) {
              desktop.insertBefore(popup, toggleContainer.nextSibling);
            } else {
              desktop.prepend(popup);
            }
            setTimeout(() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              document.documentElement.scrollTop = 0;
              document.body.scrollTop = 0;
            }, 50);
        } else {
            document.body.appendChild(popup);
        }
        // Make draggable
        makeDraggable(popup);

        // Bring to front
        highestZIndex++;
        popup.style.zIndex = highestZIndex;
      }

      function closeImagePopup(popupId) {
        const popup = document.getElementById(popupId);
        if (popup) popup.remove();
      }

      // Reusable draggable function
      function makeDraggable(popup) {
        const titlebar = popup.querySelector(".popup-titlebar");
        let isDragging = false;
        let offsetX, offsetY;

        titlebar.addEventListener("mousedown", (e) => {
          if (e.target.classList.contains("popup-control")) return;
          isDragging = true;
          offsetX = e.clientX - popup.offsetLeft;
          offsetY = e.clientY - popup.offsetTop;
          highestZIndex++;
          popup.style.zIndex = highestZIndex;

          // Disable iframe pointer events during drag to prevent click-to-stick
          const iframe = popup.querySelector("iframe");
          if (iframe) iframe.style.pointerEvents = "none";
        });

        document.addEventListener("mousemove", (e) => {
          if (!isDragging) {
            // Check if mouse released outside window
            if (isDragging) isDragging = false;
            return;
          }
          e.preventDefault();

          let newLeft = e.clientX - offsetX;
          let newTop = e.clientY - offsetY;

          // Constraint: Keep within window bounds
          const maxLeft = window.innerWidth - popup.offsetWidth;
          const maxTop = window.innerHeight - popup.offsetHeight;

          // Clamp
          newLeft = Math.max(0, Math.min(newLeft, maxLeft));
          newTop = Math.max(0, Math.min(newTop, maxTop));

          popup.style.left = newLeft + "px";
          popup.style.top = newTop + "px";
        });

        document.addEventListener("mouseup", () => {
          if (isDragging) {
            isDragging = false;
            // Re-enable iframe pointer events after drag
            const iframe = popup.querySelector("iframe");
            if (iframe) iframe.style.pointerEvents = "auto";

            // UPDATE RELATIVE OFFSET AFTER DRAG
            // This ensures subsequent resizes respect the new position
            const currentLeft = parseFloat(popup.style.left) || 0;
            popup.dataset.centerOffset = currentLeft - window.innerWidth / 2;
          }
        });

        // V1 behavior: double-click titlebar to restore minimized window
        titlebar.addEventListener("dblclick", () => {
          restorePopup(popup.id);
        });
      }

      // Make existing popups draggable
      document.querySelectorAll(".popup-window").forEach((popup) => {
        makeDraggable(popup);
      });

      window.toggleConciergeInventory = function() {
        const thirdWrapper = document.getElementById("carousel-third-wrapper");
        const btn = document.getElementById("toggle-concierge-btn");
        if (thirdWrapper.style.display === "none" || thirdWrapper.style.display === "") {
          thirdWrapper.style.display = "block";
          setTimeout(() => {
            thirdWrapper.style.height = "";
            thirdWrapper.style.opacity = "1";
          }, 10);
          btn.innerHTML = "Collapse Concierge Inventory &#x25B4;";
        } else {
          thirdWrapper.style.opacity = "0";
          thirdWrapper.style.height = "0";
          setTimeout(() => {
            thirdWrapper.style.display = "none";
          }, 500);
          btn.innerHTML = "Expand Concierge Inventory &#x25BE;";
        }
      };

      // Generate carousel items
      function generateCarousels() {
        const topCarousel = document.getElementById("carousel-top");
        const bottomCarousel = document.getElementById("carousel-bottom");
        const thirdCarousel = document.getElementById("carousel-third");

        // Hardcoded images for Carousel 1 based on specific order
        const topImagesList = [
            { src: "Foundations/The Veil/Black/Black Veil Front.png", name: "The Veil - Black", collection: "sophisticated-ignorance" },
            { src: "Foundations/The Veil/Black/Black Veil Side.png", name: "The Veil - Black", collection: "sophisticated-ignorance" },
            { src: "Foundations/The Veil/Black/Black Veil Back.png", name: "The Veil - Black", collection: "sophisticated-ignorance" },
            { src: "Foundations/The Veil/Camo/Camo Veil Front.png", name: "The Veil - Camo", collection: "sophisticated-ignorance" },
            { src: "Foundations/The Veil/Camo/Camo Veil Side.png", name: "The Veil - Camo", collection: "sophisticated-ignorance" },
            { src: "Foundations/The Veil/Camo/Camo Veil Back.png", name: "The Veil - Camo", collection: "sophisticated-ignorance" },
            { src: "Foundations/Cornerstone/Cornerstone Black.png", name: "The Cornerstone - Black", collection: "sophisticated-ignorance" },
            { src: "Foundations/Cornerstone/Cornerstone Black Closeup.png", name: "The Cornerstone - Black", collection: "sophisticated-ignorance" },
            { src: "Foundations/Cornerstone/Cornerstone White.png", name: "The Cornerstone - White", collection: "sophisticated-ignorance" },
            { src: "Foundations/Cornerstone/Cornerstone White Closeup.png", name: "The Cornerstone - White", collection: "sophisticated-ignorance" },
            { src: "Foundations/The Breakaway/Amethyst/Breakaway Amethyst Hoodie Front.png", name: "The Breakaway - Amethyst", collection: "sophisticated-ignorance" },
            { src: "Foundations/The Breakaway/Amethyst/Breakaway Amethyst Hoodie Front Zoomed.png", name: "The Breakaway - Amethyst", collection: "sophisticated-ignorance" },
            { src: "Foundations/The Breakaway/Amethyst/Breakaway Amethyst Hoodie Back.png", name: "The Breakaway - Amethyst", collection: "sophisticated-ignorance" },
            { src: "Foundations/The Breakaway/Amethyst/Breakaway Amethyst Pants Front.png", name: "The Breakaway - Amethyst", collection: "sophisticated-ignorance" },
            { src: "Foundations/The Breakaway/Amethyst/Breakaway Amethyst Pants Side.png", name: "The Breakaway - Amethyst", collection: "sophisticated-ignorance" },
            { src: "Foundations/The Breakaway/Amethyst/Breakaway Amethyst Pants Back.png", name: "The Breakaway - Amethyst", collection: "sophisticated-ignorance" },
            { src: "Foundations/The Breakaway/Grapefruit/Breakaway Grapefruit Hoodie Front.png", name: "The Breakaway - Grapefruit", collection: "sophisticated-ignorance" },
            { src: "Foundations/The Breakaway/Grapefruit/Breakaway Grapefruit Hoodie Front Zoomed.png", name: "The Breakaway - Grapefruit", collection: "sophisticated-ignorance" },
            { src: "Foundations/The Breakaway/Grapefruit/Breakaway Grapefruit Hoodie Back.png", name: "The Breakaway - Grapefruit", collection: "sophisticated-ignorance" },
            { src: "Foundations/The Breakaway/Grapefruit/Breakaway Grapefruit Pants Front.png", name: "The Breakaway - Grapefruit", collection: "sophisticated-ignorance" },
            { src: "Foundations/The Breakaway/Grapefruit/Breakaway Grapefruit Pants Side.png", name: "The Breakaway - Grapefruit", collection: "sophisticated-ignorance" },
            { src: "Foundations/The Breakaway/Grapefruit/Breakaway Grapefruit Pants Back.png", name: "The Breakaway - Grapefruit", collection: "sophisticated-ignorance" },
            { src: "Foundations/The Breakaway/Graphite/Breakaway Graphite Hoodie Front.png", name: "The Breakaway - Graphite", collection: "sophisticated-ignorance" },
            { src: "Foundations/The Breakaway/Graphite/Breakaway Graphite Hoodie Front Zoomed.png", name: "The Breakaway - Graphite", collection: "sophisticated-ignorance" },
            { src: "Foundations/The Breakaway/Graphite/Breakaway Graphite Hoodie Back.png", name: "The Breakaway - Graphite", collection: "sophisticated-ignorance" },
            { src: "Foundations/The Breakaway/Graphite/Breakaway Graphite Pants Front.png", name: "The Breakaway - Graphite", collection: "sophisticated-ignorance" },
            { src: "Foundations/The Breakaway/Graphite/Breakaway Graphite Pants Side.png", name: "The Breakaway - Graphite", collection: "sophisticated-ignorance" },
            { src: "Foundations/The Breakaway/Graphite/Breakaway Graphite Pants Back.png", name: "The Breakaway - Graphite", collection: "sophisticated-ignorance" },
            { src: "Fortifications/The Contradiction/Contradiction Exterior/Contradiction Ext. 360 Autoplay.html", name: "The Contradiction", collection: "sophisticated-ignorance", type: "iframe" },
            { src: "Fortifications/The Contradiction/Contradiction Exterior/Contradiction Ext. 1.png", name: "The Contradiction", collection: "sophisticated-ignorance" },
            { src: "Fortifications/The Contradiction/Contradiction Exterior/Contradiction Ext. 2.png", name: "The Contradiction", collection: "sophisticated-ignorance" },
            { src: "Fortifications/The Contradiction/Contradiction Exterior/Contradiction Ext. 3.png", name: "The Contradiction", collection: "sophisticated-ignorance" },
            { src: "Fortifications/The Contradiction/Contradiction Exterior/Contradiction Ext. 4.png", name: "The Contradiction", collection: "sophisticated-ignorance" },
            { src: "Fortifications/The Contradiction/Contradiction Exterior/Contradiction Ext. 5.png", name: "The Contradiction", collection: "sophisticated-ignorance" },
            { src: "Fortifications/The Contradiction/Contradiction Exterior/Contradiction Ext. 6.png", name: "The Contradiction", collection: "sophisticated-ignorance" },
            { src: "Fortifications/The Contradiction/Contradiction Reverse/Contradiction Rev. 360 Autoplay.html", name: "The Contradiction", collection: "sophisticated-ignorance", type: "iframe" },
            { src: "Fortifications/The Contradiction/Contradiction Reverse/Contradiction Rev. 1.png", name: "The Contradiction", collection: "sophisticated-ignorance" },
            { src: "Fortifications/The Contradiction/Contradiction Reverse/Contradiction Rev. 2.png", name: "The Contradiction", collection: "sophisticated-ignorance" },
            { src: "Fortifications/The Contradiction/Contradiction Reverse/Contradiction Rev. 3.png", name: "The Contradiction", collection: "sophisticated-ignorance" },
            { src: "Fortifications/The Contradiction/Contradiction Reverse/Contradiction Rev. 4.png", name: "The Contradiction", collection: "sophisticated-ignorance" },
            { src: "Fortifications/The Contradiction/Contradiction Reverse/Contradiction Rev. 5.png", name: "The Contradiction", collection: "sophisticated-ignorance" },
            { src: "Fortifications/The Contradiction/Contradiction Reverse/Contradiction Rev. 6.png", name: "The Contradiction", collection: "sophisticated-ignorance" },
            { src: "Fortifications/The Intersect/Intersect 360.html", name: "The Intersect", collection: "sophisticated-ignorance", type: "iframe" },
            { src: "Fortifications/The Intersect/Intersect 1.png", name: "The Intersect", collection: "sophisticated-ignorance" },
            { src: "Fortifications/The Intersect/Intersect 2.png", name: "The Intersect", collection: "sophisticated-ignorance" },
            { src: "Fortifications/The Intersect/Intersect 3.png", name: "The Intersect", collection: "sophisticated-ignorance" },
            { src: "Fortifications/The Intersect/Intersect 4.png", name: "The Intersect", collection: "sophisticated-ignorance" },
            { src: "Fortifications/The Intersect/Intersect 5.png", name: "The Intersect", collection: "sophisticated-ignorance" },
            { src: "Fortifications/The Intersect/Intersect 6.png", name: "The Intersect", collection: "sophisticated-ignorance" }
        ];

        const bottomImagesList = window.CAROUSEL_PRODUCTS
            .filter(p => p.collection === "sophisticated-brilliance")
            .flatMap(p => p.images.filter(i => typeof i === "string").map(img => ({
                src: img,
                name: p.name,
                collection: p.collection
            })));

        let thirdImagesList = [];
        if (folderData["concierge-automotive"] && folderData["concierge-automotive"].files) {
          thirdImagesList = thirdImagesList.concat(
              folderData["concierge-automotive"].files
                  .filter(f => f.type === 'image' && f.src)
                  .map(f => ({ src: f.src.replace(/^\//, ''), name: f.name, collection: "concierge-automotive" }))
          );
        }
        if (folderData["concierge-maritime"] && folderData["concierge-maritime"].files) {
          thirdImagesList = thirdImagesList.concat(
              folderData["concierge-maritime"].files
                  .filter(f => f.type === 'image' && f.src)
                  .map(f => ({ src: f.src.replace(/^\//, ''), name: f.name, collection: "concierge-maritime" }))
          );
        }

        const collectionDescriptions = {
           "Foundations": "Foundations serves as the base layer of refinement: the stepping stones of your wardrobe, designed for structure, comfort, and everyday uniformity. Through simplicity and precision, Foundations defines the essentials that ground identity — where form takes shape and sophistication begins.",
           "Fortifications": "Fortifications represents defense through design — luxurious garments built as armor. Each piece in this tier acts as both protection and proclamation — constructed to endure, engineered to impress.",
           "Relics": "Relics serve as the tactile memory of the brand: timeless leather goods that embody strength through subtlety and refinement through utility. Each piece is designed to be carried, aged, and remembered.",
           "Dominion": "Stride with intent. Advance with purpose.",
           "Adornments": "Elevate your expression. Define your distinction.",
           "Crownworks": "Crownworks represents the embodiment of power perfected in presentation: garments crafted for moments of command, ceremony, and consequence. Each creation in this tier signifies composure under pressure — the discipline to remain regal, the elegance to move with authority.",
           "Humble Studio Photography": "Pendant III: Humble embodies acceptance. The wounds remain visible and unembellished, free of excess. With no stones present, the piece depicts resilience shown through transparency rather than display.",
           "Metamorphosis Studio Photography": "Pendant II: Metamorphosis represents movement between denial and acceptance. The more traditional stone-setting arrangement introduces structure and order, signifying discipline, self-awareness, and progression along the journey of refinement.",
           "Beast Studio Photography": "Pendant I: Beast explores the instinct to conceal pain rather than confront it. Material brilliance is concentrated within the damaged areas, suggesting attempts to mask unresolved wounds. The reverse mosaic setting is intentional — an uneven, fragmented surface representing the 'rough around the edges' nature of the unhealed man."
        };

        [
          { carousel: topCarousel, items: topImagesList },
          { carousel: bottomCarousel, items: bottomImagesList },
          { carousel: thirdCarousel, items: thirdImagesList }
        ].forEach(({ carousel, items }) => {
          if (!carousel) return;
          let html = "";
          let allItems = [...items, ...items];
          allItems.forEach(item => {
            let imgPath = item.src;
            let hoverTitle = item.name;
            let clickAction = "";
            let folderKey = "";

            if (carousel === thirdCarousel) {
              const category = item.collection === 'concierge-automotive' ? 'automotive' : 'maritime';
              clickAction = `if (typeof openConciergeGalleryView === 'function') openConciergeGalleryView('${item.name.replace(/'/g, "\\'")}', 'Make', 'Model', '/${imgPath.replace(/'/g, "\\'")}', '${category}')`;
            } else {
                 const folderMap = {
                    "Foundations": "si-foundations",
                    "Fortifications": "si-fortifications",
                    "Relics": "si-relics",
                    "Dominion": "si-dominion",
                    "Adornments": "si-adornments",
                    "Crownworks": "si-crownworks",
                 };
                 const cleanPath = imgPath.replace(/^\//, '');
                 const pathParts = cleanPath.split("/");
                 let derivedCategory = pathParts[0]; 
                 if (derivedCategory && derivedCategory.endsWith("Studio Photography")) {
                     folderKey = "sophisticated-brilliance";
                 } else {
                     folderKey = folderMap[derivedCategory] || item.collection;
                 }
                 
                 let parsedTitle = item.name.split(" - ")[0];
                 let parsedColor = item.name.includes(" - ") ? item.name.split(" - ")[1] : (imgPath.split("/")[2] && !imgPath.split("/")[2].includes(".") ? imgPath.split("/")[2] : "");
                 
                 clickAction = `openGalleryView('${derivedCategory ? derivedCategory.replace(/'/g, "\\'") : ''}', '${parsedTitle.replace(/'/g, "\\'")}', '${parsedColor.replace(/'/g, "\\'")}', '/${imgPath.replace(/'/g, "\\'")}', '${folderKey}')`;
            }
            
            if (imgPath.endsWith('.html')) {
              html += `
                <div class="carousel-item" data-title="${hoverTitle.replace(/'/g, "\\'")}" style="padding: 0; overflow: hidden; background: #000; cursor: pointer; border-radius: 12px;" onclick="${clickAction}">
                    <iframe src="/${imgPath}?carousel=true" style="width: 100%; height: 100%; border: none; pointer-events: none; border-radius: 12px; transform: scale(1.05);" scrolling="no" tabindex="-1"></iframe>
                </div>
              `;
            } else {
              html += `
                <div class="carousel-item" data-title="${hoverTitle.replace(/'/g, "\\'")}" style="padding: 0; overflow: hidden; background: #000; cursor: pointer;" onclick="${clickAction}">
                    <img src="/${imgPath}" alt="${hoverTitle.replace(/'/g, "\\'")}" style="width: 100%; height: 100%; object-fit: contain; padding: 10px; box-sizing: border-box; display: block;">
                </div>
              `;
            }
          });
          carousel.innerHTML = html;
          
          // Dynamically set animation duration to match speed of 108px/sec (Carousel 2 original speed: 4320px in 40s)
          const speedPxPerSec = 108;
          const distancePx = items.length * 216; // 216px per item
          const durationSec = distancePx / speedPxPerSec;
          carousel.style.animationDuration = durationSec + "s";
          carousel.style.webkitAnimationDuration = durationSec + "s";
        });
      }

        window.openGalleryView = function(category, title, color, imgPath, folderKey) {
            if (typeof openFinderWindow === 'function') {
               if (folderKey === 'sophisticated-brilliance') {
                   navigationHistory = ['macintosh-hd', 'sophisticated-brilliance', 'video'];
                   historyIndex = 2;
                   openFinderWindow('video', true, true);
               } else if (folderKey.startsWith('si-')) {
                   navigationHistory = ['macintosh-hd', 'sophisticated-ignorance', folderKey];
                   historyIndex = 2;
                   openFinderWindow(folderKey, true, true);
               } else {
                   if (folderKey === 'sophisticated-brilliance' || folderKey === 'curated' || folderKey === 'cire-concierge') {
                       navigationHistory = ['macintosh-hd', folderKey];
                   } else {
                       navigationHistory = ['macintosh-hd', 'sophisticated-ignorance', folderKey];
                   }
                   historyIndex = navigationHistory.length - 1;
                   openFinderWindow(folderKey, true, true);
               }
            }
            
            let desc = collectionDescriptions[category] || "";
            let fullTitle = title + (color ? ` - ${color}` : '');
            
            window.currentShowroomData = [{
               name: fullTitle,
               description: desc,
               image: imgPath,
               collection: folderKey === 'sophisticated-brilliance' ? 'sophisticated-brilliance' : 'sophisticated-ignorance',
               vehicle_info: {
                  "Collection": category,
                  "Colorway": color || "N/A"
               }
            }];
            
            if (typeof openProductDetail === 'function') {
               openProductDetail(0, category);
            }
        };

        window.openConciergeGalleryView = function(name, make, model, imgPath, category, skipCloseModal = false) {
            if (typeof openFinderWindow === 'function') {
               const folderKey = category === 'automotive' ? 'concierge-automotive' : 'concierge-maritime';
               navigationHistory = ['macintosh-hd', 'cire-concierge', folderKey];
               historyIndex = 2;
               openFinderWindow(folderKey, true, skipCloseModal);
            }
            
            const product = window.CONCIERGE_INVENTORY.find(p => p.name === name);
            if (product) {
               window.currentShowroomData = [product];
               if (typeof openProductDetail === 'function') {
                  openProductDetail(0, category);
               }
            } else {
               window.currentShowroomData = [{
                  name: make + " " + model,
                  description: "",
                  image: imgPath,
                  vehicle_info: { "Make": make, "Model": model }
               }];
               if (typeof openProductDetail === 'function') {
                  openProductDetail(0, category);
               }
            }
        };

        // Populate sidebar
      // Folders that are now nested inside other folders (not shown in sidebar)
      const nestedFolders = [
        "macintosh-hd",
        "video",
        "maison",
        "power",
        "tom-sketches",
        "tom-renderings",
        "tom-final",
        "si-foundations",
        "si-fortifications",
        "si-relics",
        "si-dominion",
        "si-adornments",
        "si-crownworks",
        "private-services",
        "canon-continuum",
        "canon-charter",
        "canon-doctrine",
        "canon-protocols",
        "concierge-automotive",
        "concierge-maritime",
      ];

      function populateSidebar() {
        sidebar.innerHTML = `
                <div class="sidebar-section">
                    <div class="sidebar-title">Favorites</div>
                </div>
            `;

        const section = sidebar.querySelector(".sidebar-section");

        Object.keys(folderData).forEach((key) => {
          // Skip nested folders - they're inside other folders now
          if (nestedFolders.includes(key)) return;

          const folder = folderData[key];
          const item = document.createElement("div");
          item.className =
            "sidebar-item" + (key === selectedFolder ? " active" : "");
          item.dataset.folder = key;

          const count = folder.files.length;
          item.innerHTML = `
                    <i class="${getFileIcon("folder", folder.label).class}" style="color: ${getFileIcon("folder", folder.label).color}"></i>
                    ${folder.label}
                    ${count > 0 ? `<span class="count">${count}</span>` : ""}
                `;

          item.addEventListener("click", () => selectFolder(key));
          section.appendChild(item);
        });

        // Add Join Network item at the bottom of favorites
        const joinNetworkItem = document.createElement("div");
        joinNetworkItem.className = "sidebar-item";
        joinNetworkItem.dataset.folder = "join-network";
        joinNetworkItem.innerHTML = `
                <i class="fas fa-folder"></i>
                Join Network 🤝
            `;
        joinNetworkItem.addEventListener("click", () => {
          openPopup("popup-guestbook");
        });
        section.appendChild(joinNetworkItem);
      }

      // Select folder
      function selectFolder(folderKey, fromHistory = false) {
        if (folderKey === "join-network") {
          openPopup("popup-guestbook");
          return;
        }
        if (folderKey === "macintosh-hd") {
          window.history.pushState({}, '', window.location.pathname);
        } else {
          window.history.pushState({}, '', '?folder=' + encodeURIComponent(folderKey));
        }
        selectedFolder = folderKey;
        selectedColumnIndex = -1; // Reset column selection

        // Update navigation history (only if not navigating from history)
        if (!fromHistory) {
          // Remove any forward history if we're navigating from middle of stack
          navigationHistory = navigationHistory.slice(0, historyIndex + 1);
          // Only add to history if it's different from the current folder
          const currentFolder = navigationHistory[historyIndex];
          if (currentFolder !== folderKey) {
            navigationHistory.push(folderKey);
            historyIndex = navigationHistory.length - 1;
          }
          // Update button states
          updateNavigationButtons();
        }

        // Update sidebar active state
        document.querySelectorAll(".sidebar-item").forEach((item) => {
          item.classList.toggle("active", item.dataset.folder === folderKey);
        });

        // Update window title
        // Update window title - ALWAYS Macintosh HD per user request
        windowTitle.textContent = "Macintosh HD";

        // Bring Finder to front when Macintosh HD is clicked
        if (folderKey === "macintosh-hd") {
          highestZIndex++;
          finderWindow.style.zIndex = highestZIndex;
          
          if (window.innerWidth <= 768) {
            // Move finder window to top of desktop
            const desktop = document.getElementById("desktop");
            const toggleContainer = desktop.querySelector(".toggle-container");
            if (toggleContainer && toggleContainer.nextSibling) {
              desktop.insertBefore(finderWindow, toggleContainer.nextSibling);
            } else {
              desktop.prepend(finderWindow);
            }
            // Add a small delay for smooth scrolling to take effect after DOM move
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 50);
          }
        }

        // Populate files (no longer opens popup for SB/SI - just shows folder contents)
        populateContent();
      }

      // Update navigation button states
      function updateNavigationButtons() {
        const backBtn = document.querySelector(
          ".toolbar-button .fa-chevron-left",
        )?.parentElement;
        const forwardBtn = document.querySelector(
          ".toolbar-button .fa-chevron-right",
        )?.parentElement;

        if (backBtn) {
          if (historyIndex > 0) {
            backBtn.style.opacity = "1";
            backBtn.style.cursor = "pointer";
            backBtn.style.pointerEvents = "auto";
          } else {
            backBtn.style.opacity = "0.3";
            backBtn.style.cursor = "not-allowed";
            backBtn.style.pointerEvents = "none";
          }
        }

        if (forwardBtn) {
          if (historyIndex < navigationHistory.length - 1) {
            forwardBtn.style.opacity = "1";
            forwardBtn.style.cursor = "pointer";
            forwardBtn.style.pointerEvents = "auto";
          } else {
            forwardBtn.style.opacity = "0.3";
            forwardBtn.style.cursor = "not-allowed";
            forwardBtn.style.pointerEvents = "none";
          }
        }
      }

      // Navigate back in history
      function navigateBack() {
        if (historyIndex > 0) {
          historyIndex--;
          selectFolder(navigationHistory[historyIndex], true);
          updateNavigationButtons();
        }
      }

      // Navigate forward in history
      function navigateForward() {
        if (historyIndex < navigationHistory.length - 1) {
          historyIndex++;
          selectFolder(navigationHistory[historyIndex], true);
          updateNavigationButtons();
        }
      }

      // Get file icon
      function getFileIcon(type, name = "") {
        if (name === "Join Network 🤝" || name === "join network 🤝")
          return { class: "fas fa-folder", color: "#5ac8fa" };
        if (type === "folder") {
          const isRed = !isSystemUnlocked && isItemProtected(name);
          return { class: "fas fa-folder", color: isRed ? "#ff3b30" : "#5ac8fa" };
        }
        if (type === "image")
          return { class: "far fa-image image-icon", color: "#30d158" };
        if (type === "video")
          return { class: "fas fa-film video-icon", color: "#ff375f" };
        return { class: "far fa-file-alt file-icon", color: "#aaa" };
      }

      // Render markdown to HTML
      function renderMarkdown(text) {
        if (!text) return "";
        // Convert **bold** to <strong>
        text = text.replace(/\*\*([^\*]+)\*\*/g, "<strong>$1</strong>");
        // Convert *italic* to <em>
        text = text.replace(/\*([^\*]+)\*/g, "<em>$1</em>");
        // Convert newlines to <br>
        text = text.replace(/\\n/g, "<br>");
        return text;
      }

      let isSystemUnlocked = false;

      // Strict whitelist — ONLY these names can be accessed without a password
      // Folders: the key used in folderData (targetFolder value)
      // Files: the exact name string in the files array
      const OPEN_FOLDERS = new Set([
        "archive", // Root CIRE folder
        "macintosh-hd", // Root nav
        "cire-concierge",
        "si-foundations",
        "si-fortifications",
        "si-relics",
        "si-crownworks",
        "concierge-automotive",
        "concierge-maritime",
        "automotive",
        "maritime",
        "join-network",
        "sophisticated-brilliance",
        "sophisticated-ignorance",
        "video",
        "tom-sketches",
        "curated",
        "curated-content",
        "Curated Content"
      ]);

      const OPEN_FILES = new Set([
        "cire-logo.png",
        "art house.png",
        "fashion house.png",
        "coming soon.mp4",
        "teaser.mp4",
        "collection 1 logo.mp4",
        "join network 🤝.rfd",
        "Join Network 🤝",
        "join network 🤝"
      ]);

      
      function isItemProtected(name) {
        if (isSystemUnlocked) return false;
        
        const normalized = name.toLowerCase();
        
        // Explicitly protect these
        if (normalized === 'adornments' || normalized === 'si-adornments' || normalized === 'dominion' || normalized === 'si-dominion' || normalized === 'cire canon' || normalized === 'cire-canon' || normalized === 'cire hospitality' || normalized === 'cire-hospitality' || normalized === 'curated content' || normalized === 'curated') {
            return true;
        }

        const folderKey = normalized.replace(/ /g, "-");

        
        if (OPEN_FOLDERS.has(normalized) || OPEN_FOLDERS.has(folderKey))
          return false;
          
        if (OPEN_FILES.has(name) || OPEN_FILES.has(normalized)) return false;

        // Check if it's an automotive or maritime listing
        if (
          folderData["concierge-automotive"]?.files?.some(
            (f) => f.name === name,
          )
        )
          return false;
        if (
          folderData["concierge-maritime"]?.files?.some((f) => f.name === name)
        )
          return false;

        const isFolderKey = folderData.hasOwnProperty(folderKey);
        if (!isFolderKey && OPEN_FOLDERS.has(selectedFolder)) return false;

        return true;
      }

      function updateDesktopFolderColors() {
        document.querySelectorAll(".desktop-folder").forEach(folder => {
          const folderName = folder.dataset.folder;
          const icon = folder.querySelector('.icon');
          if (icon) {
            const isRed = !isSystemUnlocked && isItemProtected(folderName);
            if (isRed) {
              icon.classList.remove('blue');
              icon.classList.add('red');
            } else {
              icon.classList.remove('red');
              icon.classList.add('blue');
            }
          }
        });
      }

      window.checkSystemPassword = function (e) {
        if (e.key === "Enter") {
          if (e.target.value === "Divin3lyProt3ct3dHighlyFavor3d!") {
            isSystemUnlocked = true;
            populateContent();
          } else {
            e.target.style.borderColor = "#ff3b30";
            e.target.value = "";
            setTimeout(() => {
              e.target.style.borderColor = "#3a3a3c";
            }, 500);
          }
        }
      };


      // Populate content based on view
      function populateContent() {
        let galleryScrollLeft = 0;
        const filmstripContainer = document.querySelector(
          ".gallery-thumbnails",
        );
        if (filmstripContainer) {
          galleryScrollLeft = filmstripContainer.scrollLeft;
        }
        if (!isSystemUnlocked && isItemProtected(selectedFolder)) {
          contentArea.innerHTML = `
              <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; background: transparent; height: 100%; box-sizing: border-box; text-align: center; width: 100%;">
                  <i class="fas fa-lock lock-icon" style="font-size: 40px; color: #636366; margin-bottom: 16px;"></i>
                  <h2 style="font-size: 16px; font-weight: 500; margin-bottom: 8px; color: #fff;">This folder is locked.</h2>
                  <p style="font-size: 12px; color: #888; margin-bottom: 20px;">Enter password to unlock</p>
                  <input type="password" placeholder="••••••••" onkeypress="checkSystemPassword(event)" style="background: rgba(255,255,255,0.05); border: 1px solid #3a3a3c; border-radius: 8px; padding: 8px 12px; width: 100%; max-width: 180px; color: white; outline: none; font-family: 'Courier New', monospace; text-align: center; font-size: 14px;">
              </div>
          `;
          return;
        }



        if (selectedFolder === "curated") {
          renderCuratedContent(contentArea);
          return;
        }

        const files = folderData[selectedFolder]?.files || [];

        if (window.innerWidth <= 768 && (currentView === "columns" || currentView === "gallery")) {
          currentView = "icons";
        }

        if (currentView === "list") {
          contentArea.innerHTML = `
                    <div class="list-view">
                        <div class="list-header">
                            <span>Name</span>
                            <span>Date Modified</span>
                            <span>Size</span>
                        </div>
                        <div class="list-items">
                        ${files
                          .map((file, index) => {
                            const icon = getFileIcon(file.type, file.name);
                            let previewHtml;

                            if (file.type === "image" && file.src) {
                              previewHtml = `<div style="display: flex; align-items: center; justify-content: center; width: 20px; height: 20px; margin-right: 10px;"><img src="${file.src}" style="width: 100%; height: 100%; object-fit: contain;"></div>`;
                            } else if (file.type === "video" && file.src) {
                              previewHtml = `<video src="${file.src}#t=0.1" style="width: 20px; height: 20px; object-fit: cover; border-radius: 2px; margin-right: 10px;" muted playsinline onmouseover="this.play()" onmouseout="this.pause();this.currentTime=0;"></video>`;
                            } else if (
                              file.type === "document" &&
                              file.textContent
                            ) {
                              previewHtml = `
                            <div style="width: 16px; height: 20px; background: white; color: black; font-size: 2px; overflow: hidden; padding: 1px; margin-right: 10px; font-family: sans-serif; opacity: 0.9; border: 1px solid #ccc;">
                                ${renderMarkdown(file.textContent)}
                            </div>
                        `;
                            } else {
                              previewHtml = `<i class="${icon.class}" style="color: ${icon.color}; margin-right: 10px;"></i>`;
                            }

                            return `
                                <div class="list-item" onclick="handleFileSingleClick('${file.name.replace(
                                  /\\.png$/,
                                  "",
                                )}')" ondblclick="handleFileDoubleClick('${file.name.replace(
                                  /\\.png$/,
                                  "",
                                )}')">
                                    <div class="file-name" style="display: flex; align-items: center;">
                                        ${previewHtml}
                                        ${file.name.replace(/\.png$/, "")}
                                    </div>
                                    <span class="date-modified">Dec 7, 2025</span>
                                    <span class="size">--</span>
                                </div>
                            `;
                          })
                          .join("")}
                        </div>
                    </div>
                `;
        } else if (currentView === "icons") {
          contentArea.innerHTML = `
                    <div class="icon-view">
                        ${files
                          .map((file, index) => {
                            const icon = getFileIcon(file.type, file.name);
                            let previewHtml;

                            if (file.type === "image" && file.src) {
                              previewHtml = `<div style="display: flex; align-items: center; justify-content: center; width: 64px; height: 64px; margin-bottom: 10px;"><img src="${file.src}" style="width: 100%; height: 100%; object-fit: contain;"></div>`;
                            } else if (file.type === "video" && file.src) {
                              previewHtml = `<video src="${file.src}#t=0.1" style="width: 64px; height: 64px; object-fit: cover; border-radius: 4px; margin-bottom: 10px;" muted playsinline onmouseover="this.play()" onmouseout="this.pause();this.currentTime=0;"></video>`;
                            } else if (
                              file.type === "document" &&
                              file.textContent
                            ) {
                              previewHtml = `
                            <div style="width: 50px; height: 64px; background: white; color: black; font-size: 4px; overflow: hidden; padding: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.3); text-align: left; margin-bottom: 10px; font-family: sans-serif; opacity: 0.9;">
                                ${file.textContent}
                            </div>
                        `;
                            } else {
                              previewHtml = `<i class="${icon.class}" style="color: ${icon.color}; font-size: 48px; margin-bottom: 10px;"></i>`;
                            }

                            return `
                                <div class="icon-view-item" onclick="handleFileSingleClick('${file.name.replace(
                                  /\\.png$/,
                                  "",
                                )}')" ondblclick="handleFileDoubleClick('${file.name.replace(
                                  /\\.png$/,
                                  "",
                                )}')">
                                    ${previewHtml}
                                    <span class="name">${file.name.replace(
                                      /\.png$/,
                                      "",
                                    )}</span>
                                </div>
                            `;
                          })
                          .join("")}
                    </div>
                `;
        } else if (currentView === "columns") {
          const selectedFile =
            selectedColumnIndex >= 0 ? files[selectedColumnIndex] : null;
          const selectedIcon = selectedFile
            ? getFileIcon(selectedFile.type, selectedFile.name)
            : null;
          const fileTypeLabel = selectedFile
            ? selectedFile.type === "image"
              ? "PNG image"
              : selectedFile.type === "video"
              ? "MPEG-4 Video"
              : "Document"
            : "";

          let isFileLocked =
            selectedFile &&
            !isSystemUnlocked &&
            isItemProtected(selectedFile.name);

          let previewContent = "";
          if (isFileLocked) {
            previewContent = `
                        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; background: transparent; padding: 20px; box-sizing: border-box; text-align: center; overflow: hidden; height: 100%;">
                            <i class="fas fa-lock lock-icon" style="font-size: 32px; color: #636366; margin-bottom: 12px;"></i>
                            <h2 style="font-size: 15px; font-weight: 500; margin-bottom: 6px; color: #fff;">This file is locked.</h2>
                            <p style="font-size: 11px; color: #888; margin-bottom: 16px; max-width: 100%;">Enter password</p>
                            <input type="password" placeholder="••••••••" onkeypress="checkSystemPassword(event)" style="background: transparent; border: 1px solid #3a3a3c; border-radius: 8px; padding: 6px 10px; width: 100%; max-width: 160px; color: white; outline: none; font-family: 'Courier New', monospace; text-align: center; font-size: 12px; box-sizing: border-box;">
                        </div>
                    `;
          } else if (selectedFile?.type === "image" && selectedFile?.src) {
            previewContent = `<img src="${selectedFile.src}" style="width: 100%; height: 100%; object-fit: contain;">`;
          } else if (selectedFile?.type === "video" && selectedFile?.src) {
            previewContent = `<video src="${selectedFile.src}" style="width: 100%; height: 100%; object-fit: contain;" autoplay muted loop playsinline></video>`;
          } else if (selectedFile) {
            previewContent = `<i class="${selectedIcon.class}" style="font-size: 64px; color: ${selectedIcon.color}"></i>`;
          }

          contentArea.innerHTML = `
                    <div class="column-view">
                        <div class="column">
                            ${files
                              .map((file, index) => {
                                const icon = getFileIcon(file.type, file.name);
                                let itemPreviewHtml;

                                if (file.type === "image" && file.src) {
                                  itemPreviewHtml = `<div style="display: flex; align-items: center; justify-content: center; width: 20px; height: 20px; margin-right: 10px;"><img src="${file.src}" style="width: 100%; height: 100%; object-fit: contain;"></div>`;
                                } else if (file.type === "video" && file.src) {
                                  itemPreviewHtml = `<video src="${file.src}#t=0.1" style="width: 20px; height: 20px; object-fit: cover; border-radius: 2px; margin-right: 10px;" muted playsinline></video>`;
                                } else if (
                                  file.type === "document" &&
                                  file.textContent
                                ) {
                                  itemPreviewHtml = `
                            <div style="width: 16px; height: 20px; background: white; color: black; font-size: 2px; overflow: hidden; padding: 1px; margin-right: 10px; font-family: sans-serif; opacity: 0.9; border: 1px solid #ccc;">
                                ${file.textContent}
                            </div>
                        `;
                                } else {
                                  itemPreviewHtml = `<i class="${icon.class}" style="color: ${icon.color}; margin-right: 10px;"></i>`;
                                }

                                return `
                        <div class="column-item${
                          index === selectedColumnIndex ? " selected" : ""
                        }" 
                             onclick="selectColumnItem(${index})" 
                             ondblclick="handleFileDoubleClick('${file.name.replace(
                               /\.png$/,
                               "",
                             )}')" 
                             style="display: flex; align-items: center;">
                            ${itemPreviewHtml}
                            ${file.name.replace(/\.png$/, "")}
                        </div>
                    `;
                              })
                              .join("")}
                        </div>
                        <div class="column-preview">
                            ${
                              selectedFile
                                ? `
                                <div class="column-preview-image">
                                    ${previewContent}
                                </div>
                                <div class="column-preview-header">
                                    <div class="column-preview-name">${selectedFile.name.replace(
                                      /\.png$/,
                                      "",
                                    )}</div>
                                    <div class="column-preview-type">${fileTypeLabel} - 256 KB</div>
                                </div>
                                <div class="gallery-info-section">
                                    <div class="gallery-info-section-title">
                                        Information
                                        <span class="show-more">Show Less</span>
                                    </div>
                                    <div class="gallery-info-row">
                                        <span class="label">Created</span>
                                        <span class="value">Today, 02:42</span>
                                    </div>
                                    <div class="gallery-info-row">
                                        <span class="label">Modified</span>
                                        <span class="value">Today, 02:42</span>
                                    </div>
                                    <div class="gallery-info-row">
                                        <span class="label">Last opened</span>
                                        <span class="value">Today, 02:42</span>
                                    </div>
                                    <div class="gallery-info-row">
                                        <span class="label">Content created</span>
                                        <span class="value">Today, 02:42</span>
                                    </div>
                                </div>
                                <div class="gallery-info-section">
                                    <div class="gallery-info-section-title">Tags</div>
                                    <div style="color: #888; font-size: 12px; padding: 5px 0;">Add Tags...</div>
                                </div>
                                <div class="gallery-actions">
                                    <div class="gallery-action-btn">
                                        <i class="fas fa-undo"></i>
                                        <span>Rotate Left</span>
                                    </div>
                                    <div class="gallery-action-btn">
                                        <i class="fas fa-marker"></i>
                                        <span>Markup</span>
                                    </div>
                                    <div class="gallery-action-btn">
                                        <i class="fas fa-ellipsis-h"></i>
                                        <span>More...</span>
                                    </div>
                                </div>
                            `
                                : `
                                <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #888;">
                                    Select a file to preview
                                </div>
                            `
                            }
                        </div>
                    </div>
                `;
        } else if (currentView === "gallery") {
          const selectedFile = files[selectedGalleryIndex] || files[0];
          const icon = selectedFile
            ? getFileIcon(selectedFile.type, selectedFile.name)
            : { class: "", color: "" };
          const fileTypeLabel = selectedFile
            ? selectedFile.type.charAt(0).toUpperCase() +
              selectedFile.type.slice(1)
            : "";
          let isFileLocked =
            selectedFile &&
            !isSystemUnlocked &&
            isItemProtected(selectedFile.name);

          // Tag list
          const tagsList = [];

          // Initialize tags if not present
          if (selectedFile && !selectedFile.tags) selectedFile.tags = [];

          // Generate tag options HTML
          const tagColors = {
            "CFDA Award Candidate": "green",
            "The Fashion Awards Candidate": "green",
            "International Woolmark Prize Candidate": "green",
            "JWA Candidate": "yellow",
            "GEM Award Candidate": "yellow",
            "Inhorgenta Award Candidate": "yellow",
          };

          const tagOptionsHTML = tagsList
            .map((tag) => {
              const color = tagColors[tag] || "gray";
              return `
                        <div class="gallery-tag-option" data-tag="${tag}">
                            <div class="gallery-tag-circle ${color}"></div>
                            ${tag}
                        </div>
                    `;
            })
            .join("");

          // Generate chosen tags HTML
          const chosenTagsHTML =
            selectedFile && selectedFile.tags
              ? selectedFile.tags
                  .map(
                    (tag) => `
                    <div class="gallery-tag-chip">
                        ${tag} <i class="fas fa-times" data-remove-tag="${tag}"></i>
                    </div>
                `,
                  )
                  .join("")
              : "";

          // File Preview Logic - Images, Videos, and Documents
          // File Preview Logic - Images, Videos, and Documents
          let previewContent;
          if (isFileLocked) {
            previewContent = `
                        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; background: transparent; padding: 20px; box-sizing: border-box; text-align: center; overflow: hidden; height: 100%;">
                            <i class="fas fa-lock lock-icon" style="font-size: 32px; color: #636366; margin-bottom: 12px;"></i>
                            <h2 style="font-size: 15px; font-weight: 500; margin-bottom: 6px; color: #fff;">This file is locked.</h2>
                            <p style="font-size: 11px; color: #888; margin-bottom: 16px; max-width: 100%;">Enter password</p>
                            <input type="password" placeholder="••••••••" onkeypress="checkSystemPassword(event)" style="background: rgba(255,255,255,0.05); border: 1px solid #3a3a3c; border-radius: 8px; padding: 6px 10px; width: 100%; max-width: 160px; color: white; outline: none; font-family: 'Courier New', monospace; text-align: center; font-size: 12px; box-sizing: border-box;">
                        </div>`;
          } else if (selectedFile?.type === "image" && selectedFile?.src) {
            previewContent = `<img src="${
              selectedFile.src
            }" style="width: 100%; height: 100%; object-fit: contain; border-radius: 4px;" ondblclick="handleFileDoubleClick('${selectedFile.name.replace(
              /\\.png$/,
              "",
            )}')">`;
          } else if (selectedFile?.type === "video" && selectedFile?.src) {
            previewContent = `<video src="${
              selectedFile.src
            }" style="width: 100%; height: 100%; object-fit: contain; border-radius: 4px;" autoplay muted loop playsinline ondblclick="handleFileDoubleClick('${selectedFile.name.replace(
              /\\.png$/,
              "",
            )}')"></video>`;
          } else if (
            selectedFile?.type === "document" &&
            selectedFile?.textContent
          ) {
            previewContent = `
                        <div style="background: rgba(255,255,255,0.05); border-radius: 8px; padding: 20px; max-width: 300px; max-height: 250px; overflow: hidden; text-align: left; font-family: 'Georgia', serif;">
                            <div style="font-size: 11px; color: #888; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">📄 ${selectedFile.name.replace(
                              /\.png$/,
                              "",
                            )}</div>
                            <div style="font-size: 13px; color: #ddd; line-height: 1.6;">${renderMarkdown(
                              selectedFile.textContent,
                            )}</div>
                        </div>`;
          } else {
            previewContent = `<i class="${icon.class}" style="color: ${
              icon.color
            }; cursor: pointer;" ondblclick="handleFileDoubleClick('${selectedFile?.name.replace(
              /\\.png$/,
              "",
            )}')"></i>`;
          }

          contentArea.innerHTML = `
                    <div class="gallery-view">
                        <div class="gallery-main">
                            <div class="gallery-preview">
                                <div class="gallery-preview-content" ondblclick="if(selectedFile) { if(selectedFile.type === 'folder') selectFolder(selectedFile.targetFolder); else handleFileDoubleClick(selectedFile.name.replace(/\\.png$/, '')); }">
                                    ${previewContent}
                                </div>
                            </div>
                            <div class="gallery-info">
                                <div class="gallery-info-header">
                                    <i class="${icon.class}" style="color: ${
                                      icon.color
                                    }"></i>
                                    <div>
                                        <div class="info-name">${
                                          selectedFile?.name.replace(
                                            /\.png$/,
                                            "",
                                          ) || "No file selected"
                                        }</div>
                                        <div class="info-type">${fileTypeLabel}${
                                          selectedFile ? " - 256 KB" : ""
                                        }</div>
                                    </div>
                                </div>
                                <div class="gallery-info-section">
                                    <div class="gallery-info-section-title">
                                        Information
                                        <span class="show-more">Show More</span>
                                    </div>
                                    <div class="gallery-info-row">
                                        <span class="label">Created</span>
                                        <span class="value">Dec 7, 2025 at 23:57</span>
                                    </div>
                                    <div class="gallery-info-row">
                                        <span class="label">Modified</span>
                                        <span class="value">Dec 7, 2025 at 23:57</span>
                                    </div>
                                    <div class="gallery-info-row">
                                        <span class="label">Last opened</span>
                                        <span class="value">Dec 7, 2025 at 23:57</span>
                                    </div>
                                </div>
                                <div class="gallery-actions">
                                    <div class="gallery-action-btn">
                                        <i class="fas fa-undo"></i>
                                        <span>Rotate Left</span>
                                    </div>
                                    <div class="gallery-action-btn">
                                        <i class="fas fa-marker"></i>
                                        <span>Markup</span>
                                    </div>
                                    <div class="gallery-action-btn">
                                        <i class="fas fa-ellipsis-h"></i>
                                        <span>More...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="gallery-thumbnails" id="gallery-thumbnails" style="padding-bottom: 20px; min-height: 80px; display: flex; align-items: center; gap: 8px;"></div>
                    </div>
                `;

          // Add event listeners for tags
          const tagsInput = document.getElementById("gallery-tags-input");
          const tagsDropdown = document.getElementById("gallery-tags-dropdown");

          if (tagsInput) {
            tagsInput.addEventListener("click", (e) => {
              e.stopPropagation();
              // Close any other menus
              document.querySelectorAll(".show").forEach((el) => {
                if (el !== tagsDropdown) el.classList.remove("show");
              });

              // Toggle dropdown - move to body to escape transform stacking context
              if (tagsDropdown.classList.contains("show")) {
                tagsDropdown.classList.remove("show");
                tagsInput.classList.remove("active");
              } else {
                // Position dropdown using fixed positioning
                const rect = tagsInput.getBoundingClientRect();
                document.body.appendChild(tagsDropdown); // Move to body to escape parent overflow/transform
                tagsDropdown.style.left = rect.left + "px";
                tagsDropdown.style.top = rect.bottom + 4 + "px";
                tagsDropdown.classList.add("show");
                tagsInput.classList.add("active");
              }
            });

            // Tag selection
            document
              .querySelectorAll(".gallery-tag-option")
              .forEach((option) => {
                option.addEventListener("click", (e) => {
                  e.stopPropagation();
                  const tag = option.dataset.tag;
                  if (selectedFile && !selectedFile.tags.includes(tag)) {
                    selectedFile.tags.push(tag);
                    populateContent();
                  }
                });
              });

            // Tag removal
            document.querySelectorAll("[data-remove-tag]").forEach((btn) => {
              btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const tagToRemove = btn.dataset.removeTag;
                if (selectedFile) {
                  selectedFile.tags = selectedFile.tags.filter(
                    (t) => t !== tagToRemove,
                  );
                  populateContent();
                }
              });
            });
          }

          // Populate thumbnails
          const thumbnailsContainer =
            document.getElementById("gallery-thumbnails");
          files.forEach((file, index) => {
            const thumbIcon = getFileIcon(file.type, file.name);
            const thumb = document.createElement("div");
            thumb.className =
              "gallery-thumbnail" +
              (index === selectedGalleryIndex ? " selected" : "");
            thumb.title = file.name;

            let previewHtml;
            if (file.type === "image" && file.src) {
              previewHtml = `<img src="${file.src}" style="width: 100%; height: 100%; object-fit: contain;">`;
            } else if (file.type === "video" && file.src) {
              previewHtml = `<video src="${file.src}#t=0.1" style="width: 100%; height: 100%; object-fit: cover;" muted playsinline onmouseover="this.play()" onmouseout="this.pause();this.currentTime=0;"></video>`;
            } else if (file.type === "document" && file.textContent) {
              previewHtml = `
                            <div style="width: 100%; height: 100%; background: white; color: black; font-size: 3px; overflow: hidden; padding: 2px; font-family: sans-serif; text-align: left;">
                                ${file.textContent}
                            </div>
                        `;
            } else {
              previewHtml = `<i class="${thumbIcon.class}" style="color: ${thumbIcon.color}"></i>`;
            }

            thumb.innerHTML = `
              <div class="gallery-thumbnail-image-container">
                ${previewHtml}
              </div>
              <div class="hover-title">${file.name.replace(/\.png$/, "")}</div>
            `;
            thumb.addEventListener("click", () => {
              if (file.name === "Join Network 🤝" || file.name === "join network 🤝") {
                  openPopup("popup-guestbook");
                  return;
              }
              
              if (window.innerWidth <= 768 && selectedGalleryIndex === index) {
                  if (file.type === "folder") {
                    selectFolder(file.targetFolder);
                  } else {
                    handleFileDoubleClick(file.name.replace(/\.png$/, ""));
                  }
              } else {
                  selectedGalleryIndex = index;
                  updateGalleryDOM(index);
              }
            });
            thumb.addEventListener("dblclick", () => {
              if (file.type === "folder") {
                selectFolder(file.targetFolder);
              } else {
                handleFileDoubleClick(file.name.replace(/\.png$/, ""));
              }
            });
            thumbnailsContainer.appendChild(thumb);
          });

          // Now that thumbnails are appended, we can safely restore the scroll state
          if (galleryScrollLeft > 0) {
            thumbnailsContainer.scrollLeft = galleryScrollLeft;
          }
        }

        let totalMb = 0;
        files.forEach(f => {
          if (f.type === "video") totalMb += 450.5;
          else if (f.type === "image") totalMb += 12.4;
          else if (f.type === "folder") totalMb += 0;
          else totalMb += 2.1; // documents/unknown
        });
        
        let sizeText = "";
        if (totalMb > 0) {
          if (totalMb > 1000) {
            sizeText = `, ${(totalMb / 1000).toFixed(1)} GB`;
          } else {
            sizeText = `, ${totalMb.toFixed(1)} MB`;
          }
        }

        itemCount.textContent = `${files.length} item${
          files.length !== 1 ? "s" : ""
        }${sizeText}`;
      }

      // Open finder window
      function openFinderWindow(folderId, preserveHistory = false, skipCloseModal = false) {
        if (!folderData[folderId] && folderId !== "macintosh-hd") return;

        if (folderId === "macintosh-hd") {
          window.history.pushState({}, '', window.location.pathname);
        } else {
          window.history.pushState({}, '', '?folder=' + encodeURIComponent(folderId));
        }
        selectedFolder = folderId || "macintosh-hd";
        finderWindow.classList.add("active");

        if (!preserveHistory) {
          navigationHistory = ["macintosh-hd", folderId];
          historyIndex = navigationHistory.length - 1;
        }

        if (!skipCloseModal) {
            const modal = document.getElementById("product-detail-modal");
            if (modal && modal.style.display !== "none") {
              closeProductDetail();
            }
        }

        // Reset position to center to ensure it's always centered when opened
        const startLeft = Math.max(0, (window.innerWidth - 700) / 2);
        const startTop = 100;
        const centerX = window.innerWidth / 2;

        finderWindow.style.left = startLeft + "px";
        finderWindow.style.top = startTop + "px";

        // Calculate and store offset for resize logic
        finderWindow.dataset.centerOffset = startLeft - centerX;

        updateNavigationButtons();

        // Bring to front
        highestZIndex++;
        finderWindow.style.zIndex = highestZIndex;

        if (window.innerWidth <= 768) {
          // Move finder window to top of desktop
          const desktop = document.getElementById("desktop");
          const toggleContainer = desktop.querySelector(".toggle-container");
          if (toggleContainer && toggleContainer.nextSibling) {
            desktop.insertBefore(finderWindow, toggleContainer.nextSibling);
          } else {
            desktop.prepend(finderWindow);
          }
          // Ensure cross-browser scrolling to top
          setTimeout(() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }, 50);
        }

        populateSidebar();
        populateContent();

        // Update desktop folder selection
        deselectAllFolders();
        const selectedDesktopFolder = document.querySelector(
          `.desktop-folder[data-folder="${selectedFolder}"]`,
        );
        if (selectedDesktopFolder) {
          selectedDesktopFolder.classList.add("selected");
        }
      }

      // Close finder window
      function closeFinderWindow() {
        finderWindow.classList.remove("active");
        deselectAllFolders();
      }

      // Deselect all folders
      function deselectAllFolders() {
        document.querySelectorAll(".desktop-folder").forEach((folder) => {
          folder.classList.remove("selected");
        });
      }

      // Event listeners for desktop folders (locked positions - no dragging)
      document.querySelectorAll(".desktop-folder").forEach((folder) => {
        folder.addEventListener("dblclick", (e) => {
          if (window.isDesktopRevealed && window.isDesktopRevealed()) {
            if (window.restoreDesktopWindows) window.restoreDesktopWindows();
          }
          e.preventDefault();
          e.stopPropagation(); // Prevent wallpaper reveal from triggering

          const isJoined =
            localStorage.getItem("cire_network_joined") === "true";
          const folderName = folder.dataset.folder;

          if (folderName === "inquiry") {
            openPopup("popup-inquiry");
            return;
          }

          if (folder.id === "macintosh-hd") {
            openFinderWindow("macintosh-hd");
            return;
          }

          if (isItemProtected(folderName)) {
            openPopup("popup-restricted");
            return;
          }

          if (folderName) {
            openFinderWindow(folderName);
          }
        });

        // Handle single click (selection on desktop, open on mobile)
        folder.addEventListener("click", (e) => {
          if (window.isDesktopRevealed && window.isDesktopRevealed()) {
            if (window.restoreDesktopWindows) window.restoreDesktopWindows();
          }
          e.stopPropagation();
          if (window.innerWidth <= 768) {
            // On mobile, a single tap should open the folder
            folder.dispatchEvent(new Event("dblclick"));
          } else {
            deselectAllFolders();
            folder.classList.add("selected");
          }
        });
      });

      // Click on desktop to deselect folders
      desktop.addEventListener("click", (e) => {
        if (
          e.target === desktop ||
          e.target.classList.contains("macos-desktop")
        ) {
          deselectAllFolders();
        }
      });

      // Close button
      document
        .getElementById("close-btn")
        .addEventListener("click", closeFinderWindow);

      // Back button
      const backBtn = document.querySelector(
        ".toolbar-button .fa-chevron-left",
      )?.parentElement;
      if (backBtn) {
        backBtn.addEventListener("click", navigateBack);
      }

      // Forward button
      const forwardBtn = document.querySelector(
        ".toolbar-button .fa-chevron-right",
      )?.parentElement;
      if (forwardBtn) {
        forwardBtn.addEventListener("click", navigateForward);
      }

      // Initialize button states
      updateNavigationButtons();

      // Theme toggle
      themeToggle.addEventListener("change", (e) => {
        document.body.classList.toggle("light-mode", e.target.checked);
      });

      // View button toggle
      viewBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        viewMenu.classList.toggle("show");
      });

      // View menu items
      document.querySelectorAll(".view-menu-item").forEach((item) => {
        item.addEventListener("click", (e) => {
          e.stopPropagation();
          let view = item.dataset.view;
          
          if (window.innerWidth <= 768 && (view === "columns" || view === "gallery")) {
            view = "icons"; // Prevent switching to columns or gallery on mobile
          }
          currentView = view;

          // Update menu selection
          document
            .querySelectorAll(".view-menu-item")
            .forEach((i) => i.classList.remove("selected"));
          item.classList.add("selected");

          // Update button icon and label
          const icons = {
            list: "fa-th-list",
            icons: "fa-th-large",
            columns: "fa-columns",
            gallery: "fa-images",
          };
          const labels = {
            list: "List",
            icons: "Icons",
            columns: "Columns",
            gallery: "Gallery",
          };
          viewIcon.className = `fas ${icons[view]}`;
          viewLabel.textContent = labels[view];

          // Close menu and refresh content
          viewMenu.classList.remove("show");
          populateContent();
        });
      });

      // Close menus when clicking elsewhere
      document.addEventListener("click", (e) => {
        viewMenu.classList.remove("show");
        tagsMenu.classList.remove("show");

        // Close tags dropdown if it exists
        const tagsDropdown = document.getElementById("gallery-tags-dropdown");
        const tagsInput = document.getElementById("gallery-tags-input");
        if (tagsDropdown && !e.target.closest(".gallery-tags-wrapper")) {
          tagsDropdown.classList.remove("show");
          if (tagsInput) tagsInput.classList.remove("active");
        }
      });

      // Toggle toolbar tags menu
      tagsBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        // Functionality temporarily removed as requested
      });

      // Initialize toolbar tags
      const globalTagsList = [];

      const tagColors = {
        "CFDA Award Candidate": "green",
        "The Fashion Awards Candidate": "green",
        "International Woolmark Prize Candidate": "green",
        "JWA Candidate": "yellow",
        "GEM Award Candidate": "yellow",
        "Inhorgenta Award Candidate": "yellow",
      };

      tagsMenu.innerHTML = globalTagsList
        .map((tag) => {
          const color = tagColors[tag] || "gray";
          return `
                <div class="view-menu-item" style="color: #ddd;">
                    <div class="gallery-tag-circle ${color}" style="margin-right: 8px;"></div> ${tag}
                </div>
            `;
        })
        .join("");

      // Share button - copy to clipboard
      shareBtn.addEventListener("click", async (e) => {
        e.stopPropagation();
        try {
          await navigator.clipboard.writeText("cireconglomerate.com");
          clipboardNotification.classList.add("show");
          setTimeout(() => {
            clipboardNotification.classList.remove("show");
          }, 2000);
        } catch (err) {
          console.error("Failed to copy:", err);
        }
      });

      // Draggable window (Fixed with bounds)
      const finderWin = document.getElementById("finder-window");
      const finderTitlebar = finderWin.querySelector(".window-titlebar");

      let isFinderDragging = false;
      let finderOffsetX, finderOffsetY;

      finderTitlebar.addEventListener("mousedown", (e) => {
        if (e.target.classList.contains("window-control")) return;
        isFinderDragging = true;
        finderOffsetX = e.clientX - finderWin.offsetLeft;
        finderOffsetY = e.clientY - finderWin.offsetTop;

        // Ensure z-index handling
        if (typeof highestZIndex !== "undefined") {
          highestZIndex++;
          finderWin.style.zIndex = highestZIndex;
        }
      });

      document.addEventListener("mousemove", (e) => {
        if (!isFinderDragging) return;
        e.preventDefault();

        let newLeft = e.clientX - finderOffsetX;
        let newTop = e.clientY - finderOffsetY;

        // BOUNDS CHECKING
        const maxLeft = window.innerWidth - finderWin.offsetWidth;
        const maxTop = window.innerHeight - finderWin.offsetHeight;

        newLeft = Math.max(0, Math.min(newLeft, maxLeft));
        newTop = Math.max(0, Math.min(newTop, maxTop));

        finderWin.style.left = newLeft + "px";
        finderWin.style.top = newTop + "px";

        // Remove transform if it exists from previous attempts
        finderWin.style.transform = "none";
      });

      document.addEventListener("mouseup", () => {
        if (isFinderDragging) {
          isFinderDragging = false;
          // Update center offset for resize logic
          const currentLeft = parseFloat(finderWin.style.left) || 0;
          finderWin.dataset.centerOffset = currentLeft - window.innerWidth / 2;
        }
      });

        // Desktop Folder Positioning - Responsive to window size
        function positionDesktopFolders() {
          const startY = 100;
          const rightEdge = window.innerWidth - 100;
          const topOfCarousel = window.innerHeight - 350; // carousel + ~30px clearance

          const leftFolders = ["macintosh-hd", "inquiry"];
          let leftY = startY + 90; 
          leftFolders.forEach((id) => {
            const el =
              document.getElementById(id) ||
              document.querySelector(`[data-folder="${id}"]`);
            if (el) {
              el.style.top = leftY + "px";
              el.style.left = "20px";
              leftY += (el.offsetHeight || 100) + 15; 
            }
          });

          const rightFolders = [
            "sophisticated-ignorance",
            "sophisticated-brilliance",
            "cire-hospitality",
            "cire-concierge",
            "cire-canon",
          ];
          
          let totalRightHeight = rightFolders.length * 100;
          let gapYRight = 5; // Strictly fixed at 5px (was 10px, reduced further for visibility)
          
          let requiredHeight = totalRightHeight + (rightFolders.length - 1) * gapYRight;
          let rightY = topOfCarousel - requiredHeight;
          
          // Prevent going off the top of the screen and obstructing the theme toggle switch
          rightY = Math.max(85, rightY);

          rightFolders.forEach((id) => {
            const el =
              document.getElementById(id) ||
              document.querySelector(`[data-folder="${id}"]`);
            if (el) {
              el.style.top = rightY + "px";
              el.style.left = rightEdge + "px";
              rightY += (el.offsetHeight || 100) + gapYRight;
            }
          });
        }

      // Make desktop folders draggable
      function makeDesktopDraggable(folder) {
        let isDragging = false;
        let startX, startY, initialLeft, initialTop;

        folder.addEventListener("mousedown", (e) => {
          // Prevent dragging if content locked (e.g. reveal mode)
          if (folder.style.pointerEvents === "none") return;

          isDragging = true;
          startX = e.clientX;
          startY = e.clientY;
          initialLeft = folder.offsetLeft;
          initialTop = folder.offsetTop;

          // Bring to front slightly
          folder.style.zIndex = 10;
          e.preventDefault();
        });

        document.addEventListener("mousemove", (e) => {
          if (!isDragging) return;
          const dx = e.clientX - startX;
          const dy = e.clientY - startY;

          let newLeft = initialLeft + dx;
          let newTop = initialTop + dy;

          // Bounds checking
          const maxLeft = window.innerWidth - folder.offsetWidth;
          const maxTop = window.innerHeight - folder.offsetHeight;

          newLeft = Math.max(0, Math.min(newLeft, maxLeft));
          newTop = Math.max(0, Math.min(newTop, maxTop));

          folder.style.left = newLeft + "px";
          folder.style.top = newTop + "px";

          // Mark as manually moved
          folder.dataset.manuallyMoved = "true";
        });

        document.addEventListener("mouseup", () => {
          if (isDragging) {
            isDragging = false;
            // Save positions to localStorage
            try {
              const stored =
                localStorage.getItem("cire-folder-positions") || "{}";
              const savedPositions = JSON.parse(stored);
              const folderId = folder.id || folder.dataset.folder;
              if (folderId) {
                savedPositions[folderId] = {
                  left: parseFloat(folder.style.left),
                  top: parseFloat(folder.style.top),
                };
                // Removed localStorage override
              }
            } catch (e) {
              console.error("Error saving position", e);
            }
          }
        });
      }

      // Debounce function to limit resize event frequency
      function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
          const later = () => {
            clearTimeout(timeout);
            func(...args);
          };
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
        };
      }

      // Add resize listener with debouncing
      window.addEventListener(
        "resize",
        debounce(() => {
          positionDesktopFolders();

          // Reposition ALL open windows relative to new center
          // This maintains their visual position relative to the center of the screen
          const newCenterX = window.innerWidth / 2;
          document.querySelectorAll(".popup-window").forEach((popup) => {
            // If we have a stored offset, use it. usage of || 0 handles potential NaNs
            const offset = parseFloat(popup.dataset.centerOffset);
            if (!isNaN(offset)) {
              popup.style.left = newCenterX + offset + "px";
            }
          });

          // Handle Finder window specifically
          if (finderWindow) {
            const offset = parseFloat(finderWindow.dataset.centerOffset);
            if (!isNaN(offset)) {
              finderWindow.style.left = newCenterX + offset + "px";
            }
          }
        }, 10),
      );

      // Position initial popups relative to viewport center
      function positionInitialPopups() {
        const centerX = window.innerWidth / 2;

        function setInitialPos(id, offset, top) {
          const el =
            document.getElementById(id) ||
            document.querySelector(`[data-folder="${id}"]`);
          if (el) {
            // Only set if not already set (preserve manual moves if re-called)
            if (!el.dataset.centerOffset) {
              el.style.left = centerX + offset + "px";
              el.style.top = top;
              el.dataset.centerOffset = offset; // Store relative position
            }
          }
        }

        setInitialPos("popup-maison", -150, "18px");
        setInitialPos("popup-transcendence", -376, "69px");
        setInitialPos("popup-brilliance", -330, "202px");
        setInitialPos("popup-ignorance", 34, "285px");
        setInitialPos("popup-guestbook", -125, "100px");
        setInitialPos("popup-coming-soon", 100, "200px");
        setInitialPos("popup-power", -200, "120px");
        setInitialPos("popup-power-video", 3, "52px");
      }

      // Initialize
      window.addEventListener("DOMContentLoaded", () => {
        const urlParams = new URLSearchParams(window.location.search);
        const folderParam = urlParams.get('folder');
        const fileParam = urlParams.get('file');
        const listingParam = urlParams.get('listing');
        const refParam = urlParams.get('ref');
        const hasFolderLink = folderParam !== null;
        const hasFileLink = fileParam !== null || listingParam !== null || refParam !== null;

        const forceTutorial = new URLSearchParams(window.location.search).has('tutorial');
        let shouldDelay = !hasFolderLink && !hasFileLink;

        let launchDelay = 0;
        if (window.innerWidth <= 768) {
          currentView = "icons";
          const viewLabel = document.getElementById("view-label");
          const viewIcon = document.getElementById("view-icon");
          if (viewLabel) viewLabel.textContent = "Icons";
          if (viewIcon) viewIcon.className = "fas fa-th-large";
          document.querySelectorAll(".view-menu-item").forEach(i => i.classList.remove("selected"));
          const iconsBtn = document.querySelector('.view-menu-item[data-view="icons"]');
          if (iconsBtn) iconsBtn.classList.add("selected");

          // Background Image Interaction Logic
          const desktop = document.getElementById("desktop");
          const tutorialOverlay = document.getElementById("mobile-tutorial-overlay");
          let isRevealed = false;
          
          if (window.innerWidth <= 768) {
              document.body.classList.add("scroll-locked");
              desktop.style.backgroundImage = "url('/bg_placeholder.png')";
              desktop.style.transition = "background-image 0.5s ease-in-out";
              desktop.style.cursor = "pointer";
          }

          desktop.addEventListener("click", (e) => {
            if (e.target !== desktop) return;
            
            if (!isRevealed) {
              isRevealed = true;
              desktop.style.backgroundImage = "url('/bg.png')";
              
              if (tutorialOverlay) {
                tutorialOverlay.style.opacity = "0";
                setTimeout(() => {
                  tutorialOverlay.style.display = "none";
                }, 500);
              }
              document.body.classList.remove("scroll-locked");
            }
          });

          // Mobile Tutorial Animation

          if (shouldDelay) {
            launchDelay = 3500;
            const tutorialOverlay = document.getElementById("mobile-tutorial-overlay");
            const stepTap = document.getElementById("tutorial-tap");
            
            if (tutorialOverlay && stepTap) {
              tutorialOverlay.style.display = "flex";
              stepTap.style.display = "flex";
              stepTap.style.opacity = "1";
              
              // Hide after 3s
              setTimeout(() => {
                tutorialOverlay.style.opacity = "0";
                setTimeout(() => {
                  tutorialOverlay.style.display = "none";
                }, 500);
              }, 3000);
            }
          }
        }

        positionDesktopFolders();
        generateCarousels();
        updateDesktopFolderColors();

        const hasJoined =
          localStorage.getItem("cire_network_joined") === "true";

        // Open windows on launch
        setTimeout(() => {
          openPopup("popup-transcendence");
          openPopup("popup-power-video");
          openPopup("popup-ignorance");
          openPopup("popup-brilliance");
          openPopup("popup-maison");
          if (shouldDelay) {
            openPopup("popup-guestbook"); // Unconditionally open Join Network on normal loads
          }

          // Initialize draggable desktop folders
          document.querySelectorAll(".desktop-folder").forEach((folder) => {
            makeDesktopDraggable(folder);
          });

          // Dynamically add share buttons to all static popups
          document.querySelectorAll('.popup-window').forEach(popup => {
              if (popup.id !== 'popup-inquiry' && popup.id !== 'popup-restricted' && popup.id !== 'popup-coming-soon' && popup.id !== 'popup-guestbook') {
                  const titlebar = popup.querySelector('.popup-titlebar');
                  if (titlebar && !titlebar.querySelector('.popup-share-icon')) {
                      const titleSpan = titlebar.querySelector('.popup-title');
                      const title = titleSpan ? titleSpan.textContent : popup.id;
                      const shareBtn = document.createElement('span');
                      shareBtn.className = 'popup-share-icon';
                      shareBtn.title = 'Share Link';
                      shareBtn.onclick = function() { copyShareUrl('file', title, this); };
                      shareBtn.innerHTML = '<i class="fa-solid fa-arrow-up-right-from-square"></i>';
                      titlebar.appendChild(shareBtn);
                  }
              }
          });

          // Position all popups after opening
          positionInitialPopups();

          // Maison Manifest Delay - Block ONLY controls
          const maisonWindow = document.getElementById("popup-maison");
          if (maisonWindow) {
            const titlebar = maisonWindow.querySelector(".popup-titlebar");
            if (titlebar) {
              const blocker = document.createElement("div");
              blocker.id = "maison-blocker";
              blocker.style.position = "absolute";
              blocker.style.top = "0";
              blocker.style.left = "0";
              blocker.style.width = "100%";
              blocker.style.height = "100%";
              blocker.style.zIndex = "50"; // Above controls
              blocker.style.cursor = "wait";
              titlebar.appendChild(blocker);

              if (shouldDelay) {
                setTimeout(() => {
                  if (titlebar.contains(blocker)) {
                    titlebar.removeChild(blocker);
                  }
                }, 5000);
              } else {
                if (titlebar.contains(blocker)) titlebar.removeChild(blocker);
              }
            }
          }

          // 5-Second Scroll Restriction on Mobile
          if (window.innerWidth <= 768) {
            document.body.classList.add("scroll-locked");
            if (shouldDelay) {
              setTimeout(() => {
                document.body.classList.remove("scroll-locked");
              }, 5000);
            } else {
              document.body.classList.remove("scroll-locked");
            }
          }

          // Enforce Graphite Mode with 5s delay for Guestbook
          setTimeout(() => {
            const gbWindow = document.getElementById("popup-guestbook");
            if (gbWindow) {
              // 1. Force Fullscreen (Graphite Mode)
              if (!gbWindow.classList.contains("graphite")) {
                toggleGraphiteMode("popup-guestbook");
              }

              // 2. Global Interaction Blocker
              let globalBlocker = document.getElementById("global-blocker");
              if (!globalBlocker) {
                globalBlocker = document.createElement("div");
                globalBlocker.id = "global-blocker";
                globalBlocker.style.position = "fixed";
                globalBlocker.style.top = "0";
                globalBlocker.style.left = "0";
                globalBlocker.style.width = "100vw";
                globalBlocker.style.height = "100vh";
                globalBlocker.style.zIndex = "9998"; // Just below Guestbook (9999)
                globalBlocker.style.cursor = "wait";
                globalBlocker.style.background = "transparent"; // Invisible wall
                document.body.appendChild(globalBlocker);

                // Ensure Guestbook is ON TOP
                gbWindow.style.zIndex = "9999";
              }

              // 3. Block Window Controls (Close/Min/Max) specifically
              const controls = gbWindow.querySelectorAll(".popup-control");
              controls.forEach((c) => {
                c.style.pointerEvents = "none";
                c.style.opacity = "0.5";
              });

              // Remove blocking immediately (was 5000ms)
              const removeBlocker = () => {
                // Remove global blocker
                if (globalBlocker && document.body.contains(globalBlocker)) {
                  document.body.removeChild(globalBlocker);
                }

                // Re-enable window controls
                controls.forEach((c) => {
                  c.style.pointerEvents = "auto";
                  c.style.opacity = "1";
                });

                // Normalise z-index to fall into standard layer hierarchy
                highestZIndex++;
                gbWindow.style.zIndex = highestZIndex;
              };

              if (!hasFolderLink && !hasFileLink) {
                setTimeout(removeBlocker, 5000); // RESTORED TO 5000ms per user request
              } else {
                removeBlocker();
              }
            }
          }, 100);
        }, launchDelay > 0 ? launchDelay : 300);
      });

      // Mobile Single-Tap to Open
      document.addEventListener(
        "click",
        (e) => {
          if (window.innerWidth <= 768) {
            const target = e.target.closest("[ondblclick]");
            if (target) {
              if (target.getAttribute('data-mobile-clicked')) return;
              target.setAttribute('data-mobile-clicked', 'true');
              setTimeout(() => target.removeAttribute('data-mobile-clicked'), 500);

              e.preventDefault();
              target.dispatchEvent(new MouseEvent("dblclick", { bubbles: true, cancelable: true }));
            }
          }
        },
        true
      );

      // GLOBAL Z-INDEX HANDLER (Delegated)
      document.addEventListener(
        "mousedown",
        (e) => {
          const popup = e.target.closest(".popup-window, .finder-window");
          if (popup) {
            if (parseInt(popup.style.zIndex) !== highestZIndex) {
              highestZIndex++;
              popup.style.zIndex = highestZIndex;
            }
          }
        },
        true,
      );

      // Click wallpaper to reveal desktop (macOS-style)
      let desktopRevealed = false;
      const desktopEl =
        document.getElementById("desktop") ||
        document.querySelector(".macos-desktop");

      if (desktopEl) {
        // Prevent event bubbling on window controls
        document.querySelectorAll(".popup-window").forEach((popup) => {
          const controls = popup.querySelectorAll(".popup-control");
          controls.forEach((control) => {
            control.addEventListener("click", (e) => {
              e.stopPropagation();
            });
            control.addEventListener("mousedown", (e) => {
              e.stopPropagation();
            });
          });
        });

        function restoreDesktopWindows() {
          const allPopups = document.querySelectorAll(".popup-window.active");
          const finderWin = document.getElementById("finder-window");
          desktopRevealed = false;
          allPopups.forEach((popup) => {
            popup.style.transition = "left 0.4s ease, top 0.4s ease";
            if (popup.dataset.preRevealLeft) {
              popup.style.left = popup.dataset.preRevealLeft;
              popup.style.top = popup.dataset.preRevealTop;
              delete popup.dataset.preRevealTop;
              delete popup.dataset.preRevealLeft;
            } else {
              highestZIndex++;
              popup.style.zIndex = highestZIndex;
            }
          });
          if (finderWin) {
            if (finderWin.dataset.preRevealLeft) {
              finderWin.style.left = finderWin.dataset.preRevealLeft;
              finderWin.style.top = finderWin.dataset.preRevealTop;
              delete finderWin.dataset.preRevealLeft;
              delete finderWin.dataset.preRevealTop;
            }
          }
          setTimeout(() => {
            allPopups.forEach((p) => (p.style.transition = ""));
            if (finderWin) finderWin.style.transition = "";
          }, 500);
        }
        window.restoreDesktopWindows = restoreDesktopWindows;
        window.isDesktopRevealed = () => desktopRevealed;

        desktopEl.addEventListener("click", (e) => {
          const folder = e.target.closest(".desktop-folder");

          // If clicking a folder, restore windows if desktop was revealed
          if (folder) {
            if (desktopRevealed) {
              restoreDesktopWindows();
            }
            return;
          }

          // Handle Reveal Desktop (only if clicking wallpaper)
          if (
            e.target !== desktopEl &&
            !e.target.classList.contains("macos-desktop")
          )
            return;

          const allPopups = document.querySelectorAll(".popup-window.active");
          const finderWin = document.getElementById("finder-window");

          if (!desktopRevealed) {
            desktopRevealed = true;
            allPopups.forEach((popup, i) => {
              const rect = popup.getBoundingClientRect();
              popup.dataset.preRevealLeft = popup.style.left;
              popup.dataset.preRevealTop = popup.style.top;
              if (!popup.style.left)
                popup.dataset.preRevealLeft = rect.left + "px";
              if (!popup.style.top)
                popup.dataset.preRevealTop = rect.top + "px";

              popup.style.transition =
                "left 0.4s ease, top 0.4s ease, opacity 0.4s ease";
              popup.style.right = "auto";
              if (i % 2 === 0) {
                popup.style.setProperty(
                  "left",
                  "-" + (popup.offsetWidth + 50) + "px",
                  "important",
                );
              } else {
                popup.style.setProperty(
                  "left",
                  window.innerWidth + 50 + "px",
                  "important",
                );
              }
            });
            if (finderWin && finderWin.classList.contains("active")) {
              finderWin.dataset.preRevealLeft = finderWin.style.left;
              finderWin.dataset.preRevealTop = finderWin.style.top;
              finderWin.style.transition = "left 0.4s ease, top 0.4s ease";
              finderWin.style.setProperty("left", window.innerWidth + 50 + "px", "important");
            }
          } else {
            restoreDesktopWindows();
          }
        });
      }


      // Ensure popups come to front on click
      document.querySelectorAll(".popup-window").forEach((popup) => {
        popup.addEventListener("mousedown", () => {
          if (parseInt(popup.style.zIndex) !== highestZIndex) {
            highestZIndex++;
            popup.style.zIndex = highestZIndex;
          }
        });
      });
      // --- Curated Content Custom Native Video Mosaic ---
      window.CURATED_VIDEOS = [
        {
          id: "71234567890",
          title: "Sophisticated Ignorance — Volume I",
          caption: "A curated statement of presence and posture.",
          author: "@thesophisticatedignorant",
          poster: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop",
          aspectRatio: "16/9"
        },
        {
          id: "72345678901",
          title: "Monaco Marine Showcase",
          caption: "Curated maritime architectural perfection.",
          author: "@thesophisticatedignorant",
          poster: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600&auto=format&fit=crop",
          aspectRatio: "4/5"
        },
        {
          id: "73456789012",
          title: "Automotive Precision & Form",
          caption: "The hypercar ecosystem in focus.",
          author: "@thesophisticatedignorant",
          poster: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&auto=format&fit=crop",
          aspectRatio: "9/16"
        },
        {
          id: "74567890123",
          title: "Sophisticated Brilliance Private Archive",
          caption: "Curated aesthetic direction.",
          author: "@thesophisticatedignorant",
          poster: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=600&auto=format&fit=crop",
          aspectRatio: "1/1"
        }
      ];

      function renderCuratedContent(container) {
        const videos = window.CURATED_VIDEOS || [];
        
        let cardsHtml = videos.map(video => `
          <div class="curated-video-card" onclick="openTikTokPlayer('${video.id}')">
            <img src="${video.poster}" alt="${video.title}" class="curated-video-thumbnail" style="aspect-ratio: ${video.aspectRatio || '9/16'};" loading="lazy" />
            <div class="curated-card-overlay">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: rgba(255,255,255,0.7); font-family: monospace;">${video.author}</span>
                <i class="fas fa-play" style="color: #fff; font-size: 12px; background: rgba(0,0,0,0.5); padding: 8px; border-radius: 50%;"></i>
              </div>
              <div>
                <h4 style="margin: 0 0 4px 0; color: #fff; font-size: 14px; font-weight: 500; font-family: 'Helvetica Neue', sans-serif;">${video.title}</h4>
                <p style="margin: 0; color: rgba(255,255,255,0.7); font-size: 12px; line-height: 1.4;">${video.caption}</p>
              </div>
            </div>
          </div>
        `).join('');

        container.innerHTML = `
          <div style="display: flex; flex-direction: column; height: 100%; width: 100%; background: transparent; overflow-y: auto; padding: 20px 10px;">
              <!-- Mosaic Grid Container -->
              <div id="curated-feed-view" style="width: 100%;">
                  <div class="curated-masonry-grid">
                      ${cardsHtml}
                  </div>
              </div>

              <!-- Dedicated Video Player Modal Container -->
              <div id="curated-player-view" style="display: none; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%; min-height: 450px;">
                  <button onclick="closeTikTokPlayer()" style="align-self: flex-start; background: transparent; border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 6px 14px; margin-bottom: 15px; cursor: pointer; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">
                    ← Back to Explore Grid
                  </button>
                  <div id="tiktok-embed-container" style="width: 100%; max-width: 500px; display: flex; justify-content: center;"></div>
              </div>
          </div>
        `;
      }

      window.closeTikTokPlayer = function () {
        const feedView = document.getElementById("curated-feed-view");
        const playerView = document.getElementById("curated-player-view");

        if (feedView) feedView.style.display = "block";
        if (playerView) playerView.style.display = "none";
      };

      window.openTikTokPlayer = function (videoId) {
        const feedView = document.getElementById("curated-feed-view");
        const playerView = document.getElementById("curated-player-view");

        if (feedView) feedView.style.display = "none";
        if (playerView) playerView.style.display = "flex";

        const container = document.getElementById("tiktok-embed-container");
        if (container) {
          container.innerHTML = `<div class="loader" style="border: 2px solid #333; border-top: 2px solid #fff; border-radius: 50%; width: 24px; height: 24px; animation: spin 1s linear infinite;"></div>`;

          // Use TikTok's official embed player for native features
          setTimeout(() => {
            container.innerHTML = `
                        <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@thesophisticatedignorant/video/${videoId}" data-video-id="${videoId}" style="max-width: 605px;min-width: 325px; width: 100%; height: 100%; margin: 0; padding: 0; border: none; background: transparent;" >
                            <section> 
                                <a target="_blank" title="@thesophisticatedignorant" href="https://www.tiktok.com/@thesophisticatedignorant?refer=embed">@thesophisticatedignorant</a> 
                            </section> 
                        </blockquote>
                    `;
            // Load TikTok embed script if not already loaded
            if (!document.getElementById("tiktok-embed-script")) {
              const script = document.createElement("script");
              script.id = "tiktok-embed-script";
              script.src = "https://www.tiktok.com/embed.js";
              script.async = true;
              document.body.appendChild(script);
            } else {
              if (window.tiktokEmbed && window.tiktokEmbed.embed) {
                window.tiktokEmbed.embed();
              }
            }
          }, 300);
        }
      };

      window.closeTikTokPlayer = function () {
        const feedView = document.getElementById("curated-feed-view");
        const playerView = document.getElementById("curated-player-view");
        const container = document.getElementById("tiktok-embed-container");

        if (feedView) feedView.style.display = "block";
        if (playerView) playerView.style.display = "none";
        if (container) container.innerHTML = "";
      };

      // --- Automotive & Maritime Custom Gallery ---
      async function renderProductGallery(folderKey, container) {
        container.innerHTML = `<div style="padding: 20px; color: white; display:flex; justify-content:center; align-items:center; height:100%;">
                <div class="loader" style="border: 2px solid #333; border-top: 2px solid #fff; border-radius: 50%; width: 24px; height: 24px; animation: spin 1s linear infinite;"></div>
            </div>`;
        try {
          const res = await fetch("/src/concierge_inventory.json");
          const data = await res.json();
          const category =
            folderKey === "concierge-automotive" ? "automotive" : "maritime";
          const filtered = data.filter((d) => d.category === category);

          let html = `<div class="product-gallery" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 24px; padding: 24px; overflow-y: auto; height: 100%; box-sizing: border-box;">`;
          filtered.forEach((item, index) => {
            const imgSrc = item.image;
            html += `
                        <div class="product-card" onclick="openProductDetail(${index}, '${category}')" style="background: rgba(28, 28, 30, 0.8); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; padding: 20px; cursor: pointer; transition: transform 0.2s, background 0.2s; display: flex; flex-direction: column; align-items: center; text-align: center;">
                            <img src="${imgSrc}" loading="lazy" style="width: 100%; height: 130px; object-fit: contain; margin-bottom: 20px; filter: contrast(1.1) brightness(1.1); ">
                            <h3 style="color: #fff; font-size: 15px; font-weight: 500; margin: 0 0 8px 0; font-family: -apple-system, BlinkMacSystemFont, sans-serif;">${item.name}</h3>
                            
                        </div>
                    `;
          });
          html += `</div>`;
          container.innerHTML = html;

          window.currentShowroomData = filtered;
        } catch (e) {
          console.error(e);
          container.innerHTML = `<div style="padding: 20px; color: #ff453a; text-align: center; font-family: -apple-system, sans-serif;">Failed to load fleet data.<br>Please ensure the data file exists.</div>`;
        }
      }

      let isOpeningModal = false;
      function copyShareLink() {
        const itemName = document.getElementById("pd-title").innerText;
        if (!itemName) return;
        const shareUrl = window.location.origin + window.location.pathname + "?listing=" + encodeURIComponent(itemName);
        navigator.clipboard.writeText(shareUrl).then(() => {
          const btn = document.getElementById("pd-share-btn");
          const originalText = btn.innerText;
          btn.innerText = "Copied!";
          setTimeout(() => { btn.innerText = originalText; }, 2000);
        }).catch(err => {
          console.error("Failed to copy link: ", err);
        });
      }

      
            function openProductDetail(index, category) {
        const item = window.currentShowroomData[index];
        if (item) {
          window.history.pushState({}, '', '?file=' + encodeURIComponent(item.name));
        }
        if (isOpeningModal) return;
        isOpeningModal = true;

        try {
          const modal = document.getElementById("product-detail-modal");
          if (modal && modal.style.display === "flex") return;
          
          const origProduct = window.CAROUSEL_PRODUCTS.find(p => p.name === item.name) || item;
          const mainImage = document.getElementById("pd-image");
          
          let existingGallery = document.getElementById("custom-gallery-carousel");
          if (existingGallery) existingGallery.remove();
          
          let existingToggles = document.getElementById("pd-toggles");
          if (existingToggles) existingToggles.remove();
          
          // Re-initialize modal elements just in case they were modified
          document.getElementById("pd-title").innerText = item.name;
          
          const infoContainer = document.getElementById("pd-info");
          const perfContainer = document.getElementById("pd-perf");
          const reqContainer = document.getElementById("pd-req");
          const descContainer = document.getElementById("pd-desc");
          
          infoContainer.parentElement.style.display = "block";
          reqContainer.parentElement.style.display = "block";
          perfContainer.parentElement.style.display = "block";
          descContainer.parentElement.style.display = "block";
          
          if (item.collection === "sophisticated-brilliance" || item.collection === "sophisticated-ignorance") {
            // It's a jewelry/collection item!
            window.currentGalleryImages = origProduct.images || [item.image];
            window.currentGalleryIndex = 0;
            
            mainImage.style.display = "none";
            
            let galleryHtml = `
              <div id="custom-gallery-carousel" style="width: 100%; max-width: 500px; margin-bottom: 20px; position: relative; display: flex; flex-direction: column; align-items: center;">
                <div id="gallery-carousel-viewport" style="width: 100%; height: 240px; position: relative; border-radius: 8px; overflow: hidden; background: transparent;">
                </div>
                <div style="position: absolute; top: 50%; width: 100%; display: flex; justify-content: space-between; padding: 0 10px; transform: translateY(-50%); pointer-events: none; z-index: 10;">
                  <button id="gallery-prev" onclick="window.changeGallerySlide(-1)" style="pointer-events: auto; background: rgba(0,0,0,0.5); border: none; color: white; border-radius: 50%; width: 40px; height: 40px; cursor: pointer; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(10px);"><i class="fa-solid fa-chevron-left"></i></button>
                  <button id="gallery-next" onclick="window.changeGallerySlide(1)" style="pointer-events: auto; background: rgba(0,0,0,0.5); border: none; color: white; border-radius: 50%; width: 40px; height: 40px; cursor: pointer; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(10px);"><i class="fa-solid fa-chevron-right"></i></button>
                </div>
                <div id="gallery-carousel-indicators" style="display: flex; gap: 8px; margin-top: 15px;">
                </div>
              </div>
            `;
            mainImage.insertAdjacentHTML('afterend', galleryHtml);
            
            window.changeGallerySlide = function(dir) {
               window.currentGalleryIndex += dir;
               if (window.currentGalleryIndex < 0) window.currentGalleryIndex = window.currentGalleryImages.length - 1;
               if (window.currentGalleryIndex >= window.currentGalleryImages.length) window.currentGalleryIndex = 0;
               window.renderGallerySlide();
            };
            
            window.renderGallerySlide = function() {
               const img = window.currentGalleryImages[window.currentGalleryIndex];
               const viewport = document.getElementById("gallery-carousel-viewport");
               if(!viewport) return;
               if (typeof img === 'string') {
                   viewport.innerHTML = `<img src="/${img}" style="width: 100%; height: 100%; object-fit: contain; filter: contrast(1.1) brightness(1.1); mix-blend-mode: plus-lighter;" />`;
               } else if (img && img.type === 'iframe') {
                   viewport.innerHTML = `<iframe src="/${img.src}" style="width: 100%; height: 100%; border: none; background: transparent;"></iframe>`;
               }
               const indicatorsContainer = document.getElementById("gallery-carousel-indicators");
               if (indicatorsContainer) {
                   indicatorsContainer.innerHTML = window.currentGalleryImages.map((_, idx) => `
                      <div onclick="window.currentGalleryIndex=${idx}; window.renderGallerySlide();" style="width: 25px; height: 3px; cursor: pointer; background: ${idx === window.currentGalleryIndex ? '#fff' : 'rgba(255,255,255,0.3)'}; border-radius: 2px; transition: background 0.3s;"></div>
                   `).join('');
               }
            };
            window.renderGallerySlide();
            
            if (!window.galleryKeydownHandlerAttached) {
               window.galleryKeydownHandler = function(e) {
                   const modal = document.getElementById("product-detail-modal");
                   if (modal && modal.style.display !== "none" && document.getElementById("custom-gallery-carousel")) {
                       if (e.key === "ArrowLeft") window.changeGallerySlide(-1);
                       if (e.key === "ArrowRight") window.changeGallerySlide(1);
                   }
               };
               document.addEventListener('keydown', window.galleryKeydownHandler);
               window.galleryKeydownHandlerAttached = true;
            }
            
            const togglesContainer = document.createElement("div");
            togglesContainer.id = "pd-toggles";
            togglesContainer.style.display = "flex";
            togglesContainer.style.marginBottom = "20px";
            togglesContainer.style.gap = "10px";
            
            descContainer.parentElement.insertBefore(togglesContainer, descContainer.previousElementSibling);
            
            if (item.collection === "sophisticated-brilliance") {
              reqContainer.parentElement.style.display = "block";
              reqContainer.previousElementSibling.innerText = "Collection:";
              reqContainer.innerHTML = "<li style='list-style:none; margin-left:-20px; font-size:14px;'>Transcendence of Man</li>";
              perfContainer.parentElement.style.display = "none";
              descContainer.previousElementSibling.innerText = "Metal Treatment";
              
              togglesContainer.innerHTML = `
                    <button class="metal-toggle active" data-metal="rose" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: white; padding: 8px 12px; border-radius: 8px; cursor: pointer; font-size: 12px;">Rose Gold</button>
                    <button class="metal-toggle" data-metal="yellow" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #aaa; padding: 8px 12px; border-radius: 8px; cursor: pointer; font-size: 12px;">Yellow Gold</button>
                    <button class="metal-toggle" data-metal="white" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #aaa; padding: 8px 12px; border-radius: 8px; cursor: pointer; font-size: 12px;">White Gold</button>
              `;
              
              document.querySelectorAll(".metal-toggle").forEach(btn => {
                btn.onclick = (e) => {
                  document.querySelectorAll(".metal-toggle").forEach(b => {
                    b.style.background = "rgba(255,255,255,0.05)";
                    b.style.color = "#aaa";
                    b.style.borderColor = "rgba(255,255,255,0.1)";
                  });
                  e.target.style.background = "rgba(255,255,255,0.1)";
                  e.target.style.color = "white";
                  e.target.style.borderColor = "rgba(255,255,255,0.2)";
                  
                  const metal = e.target.dataset.metal;
                  const targetPrefix = origProduct.name + " - " + metal.charAt(0).toUpperCase() + metal.slice(1) + " Gold";
                  const metalImages = window.CAROUSEL_PRODUCTS.filter(p => p.name === targetPrefix).flatMap(p => p.images || []);
                  
                  if (metalImages.length > 0) {
                     window.currentGalleryImages = metalImages;
                  } else {
                     window.currentGalleryImages = origProduct.images || [item.image];
                  }
                  window.currentGalleryIndex = 0;
                  window.renderGallerySlide();
                };
              });
              
              const initialColorMatch = item.name.match(/-\s*(.+)\s*Gold$/i);
              const initialMetal = initialColorMatch ? document.querySelector(`.metal-toggle[data-metal='${initialColorMatch[1].toLowerCase()}']`) : document.querySelector(".metal-toggle[data-metal='rose']");
              if (initialMetal) {
                  initialMetal.click();
              } else {
                  window.currentGalleryImages = origProduct && origProduct.images ? origProduct.images : (item.image ? [item.image] : []);
                  window.currentGalleryIndex = 0;
                  window.renderGallerySlide();
              }
              
              descContainer.innerText = item.description || origProduct.description || "Asset profile is currently sealed. Full specifications will be available upon allocation.";
            } else if (item.collection === "sophisticated-ignorance") {
              document.getElementById("pd-title").innerText = item.name;
              
              if (origProduct && origProduct.tier) {
                reqContainer.parentElement.style.display = "block";
                reqContainer.previousElementSibling.innerText = "Position: " + origProduct.tier;
                reqContainer.innerHTML = "<li style='list-style:none; margin-left:-20px; font-size:14px; text-transform:uppercase;'>" + (origProduct.tierDesc || "") + "</li>";
              } else {
                reqContainer.parentElement.style.display = "none";
              }
              perfContainer.parentElement.style.display = "none";
              
              const baseNameStr = item.name.split(" - ")[0];
              const relatedItems = window.CAROUSEL_PRODUCTS.filter(p => p.name.startsWith(baseNameStr) && p.collection === "sophisticated-ignorance");
              
              if (relatedItems.length > 1) {
                  descContainer.previousElementSibling.innerText = "Colorways";
                  relatedItems.forEach(relatedItem => {
                      const colorName = relatedItem.name.split(" - ")[1] || "Default";
                      const btn = document.createElement("button");
                      btn.className = "metal-toggle";
                      if (relatedItem.name === item.name) {
                          btn.className += " active";
                          btn.style.background = "rgba(255,255,255,0.1)";
                          btn.style.color = "white";
                          btn.style.borderColor = "rgba(255,255,255,0.2)";
                      } else {
                          btn.style.background = "rgba(255,255,255,0.05)";
                          btn.style.color = "#aaa";
                          btn.style.borderColor = "rgba(255,255,255,0.1)";
                      }
                      btn.style.padding = "8px 12px";
                      btn.style.borderRadius = "8px";
                      btn.style.cursor = "pointer";
                      btn.style.fontSize = "12px";
                      btn.innerText = colorName;
                      
                      btn.onclick = () => {
                         window.currentGalleryImages = relatedItem.images || [relatedItem.image || item.image];
                         window.currentGalleryIndex = 0;
                         window.renderGallerySlide();
                         
                         document.getElementById("pd-title").innerText = relatedItem.name + (relatedItem.price ? " - $" + relatedItem.price : "");
                         descContainer.innerText = relatedItem.description || "Asset profile is currently sealed. Full specifications will be available upon allocation.";
                         
                         Array.from(togglesContainer.children).forEach(b => {
                             b.style.background = "rgba(255,255,255,0.05)";
                             b.style.color = "#aaa";
                             b.style.borderColor = "rgba(255,255,255,0.1)";
                             b.classList.remove("active");
                         });
                         btn.style.background = "rgba(255,255,255,0.1)";
                         btn.style.color = "white";
                         btn.style.borderColor = "rgba(255,255,255,0.2)";
                         btn.classList.add("active");
                      };
                      togglesContainer.appendChild(btn);
                  });
              } else {
                  descContainer.previousElementSibling.innerText = "Information";
                  togglesContainer.style.display = "none";
              }
              descContainer.innerText = item.description || "Asset profile is currently sealed. Full specifications will be available upon allocation.";
              
              const activeToggle = togglesContainer.querySelector('.metal-toggle.active');
              if (activeToggle) {
                  activeToggle.click();
              } else {
                  window.currentGalleryImages = origProduct && origProduct.images ? origProduct.images : (item.image ? [item.image] : []);
                  window.currentGalleryIndex = 0;
                  window.renderGallerySlide();
              }
            }
          } else {
            mainImage.style.display = "block";
            mainImage.src = item.image;
            mainImage.style.mixBlendMode = "plus-lighter";
            mainImage.style.filter = "contrast(1.1) brightness(1.1)";
            mainImage.style.objectFit = "contain";
            
            document.getElementById("pd-title").innerText = item.name;
            descContainer.previousElementSibling.innerText = "Description";
            descContainer.innerText = item.description || "Description not available.";

            infoContainer.innerHTML = "";
            if (item.vehicle_info) {
              for (const [key, value] of Object.entries(item.vehicle_info)) {
                infoContainer.innerHTML += `<li style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.05);"><span style="font-weight:600;color:#fff;">${key}</span><span style="color:#d1d1d6;">${value}</span></li>`;
              }
            } else {
              infoContainer.innerHTML = "<li>N/A</li>";
            }

            perfContainer.innerHTML = "";
            if (item.performance) {
              for (const [key, value] of Object.entries(item.performance)) {
                perfContainer.innerHTML += `<li><strong>${key}:</strong> ${value}</li>`;
              }
            } else {
              perfContainer.innerHTML = "<li>N/A</li>";
            }

            reqContainer.innerHTML = "";
            if (item.requirements && item.requirements.rental_requirements && item.requirements.rental_requirements.length > 0) {
              item.requirements.rental_requirements.forEach((req) => {
                reqContainer.innerHTML += `<li>${req}</li>`;
              });
            } else if (Array.isArray(item.requirements)) {
              item.requirements.forEach((req) => {
                reqContainer.innerHTML += `<li>${req}</li>`;
              });
            } else {
              reqContainer.innerHTML = `
                          <li>Must be 25 years or older</li>
                          <li>Valid US or International Drivers License</li>
                          <li>Full Coverage Auto Insurance</li>
                          <li>Refundable Security Deposit Required</li>
                      `;
            }
            
            const inqModel = document.getElementById("inq-model");
            if (inqModel) inqModel.value = item.name;
            const inqCategory = document.getElementById("inq-category");
            if (inqCategory) inqCategory.value = category === "automotive" ? "Exotic Vehicle" : "Yacht";
          }

          modal.style.display = "flex";
          const bodyContainer = modal.querySelector('.product-detail-body-container');
          if (bodyContainer) {
            bodyContainer.scrollTop = 0;
          }
          setTimeout(() => modal.classList.add("visible"), 10);
        } catch (e) {
          console.error(e);
        } finally {
          setTimeout(() => (isOpeningModal = false), 300);
        }
      }

      function closeProductDetail() {
        if (selectedFolder === "macintosh-hd") {
          window.history.pushState({}, '', window.location.pathname);
        } else {
          window.history.pushState({}, '', '?folder=' + encodeURIComponent(selectedFolder));
        }
        const modal = document.getElementById("product-detail-modal");
        if (modal) {
          modal.classList.remove("visible");
          setTimeout(() => { modal.style.display = "none"; }, 300);
        }
        
        // Return active metal to Rose
        const defaultToggle = document.querySelector(".metal-toggle[data-metal='rose']");
        if (defaultToggle) defaultToggle.click();
      }


      function openInquiryForm() {
        document.getElementById("product-detail-modal").style.display = "none";
        const modal = document.getElementById("inquiry-form-modal");
        modal.style.display = "flex";
        modal.style.zIndex = "99999999";
        setTimeout(() => modal.classList.add("visible"), 10);

        const category = window.currentShowroomData[0]?.category;
        const yachtCheckbox = document.getElementById("addon-yacht");
        const experienceSelect = document.getElementById("inq-experience");
        const deliverySection = document.getElementById("delivery-section");
        const locationSection = document.getElementById("location-section");
        const driverSection = document.getElementById(
          "driver-eligibility-section",
        );

        if (category === "maritime") {
          if (yachtCheckbox) {
            yachtCheckbox.disabled = true;
            yachtCheckbox.checked = false;
            yachtCheckbox.nextElementSibling.style.textDecoration =
              "line-through";
            yachtCheckbox.nextElementSibling.style.opacity = "0.5";
          }
          if (experienceSelect) {
            Array.from(experienceSelect.options).forEach((opt) => {
              if (opt.value === "Real Estate Showing")
                opt.style.display = "none";
            });
            if (experienceSelect.value === "Real Estate Showing")
              experienceSelect.value = "";
          }
          if (deliverySection) deliverySection.style.display = "none";
          if (locationSection) locationSection.style.display = "none";
          if (driverSection) driverSection.style.display = "none";
        } else {
          if (yachtCheckbox) {
            yachtCheckbox.disabled = false;
            yachtCheckbox.nextElementSibling.style.textDecoration = "none";
            yachtCheckbox.nextElementSibling.style.opacity = "1";
          }
          if (experienceSelect) {
            Array.from(experienceSelect.options).forEach((opt) => {
              if (opt.value === "Real Estate Showing")
                opt.style.display = "block";
            });
          }
          if (deliverySection) deliverySection.style.display = "flex";
          if (locationSection) locationSection.style.display = "flex";
          if (driverSection) driverSection.style.display = "block";
        }
      }

      function closeInquiryForm() {
        const modal = document.getElementById("inquiry-form-modal");
        modal.classList.remove("visible");
        modal.style.display = "none";
      }

      async function submitInquiry(e) {
        e.preventDefault();
        const btn = document.getElementById("inq-submit-btn");
        const originalText = btn.innerText;
        btn.innerText = "Submitting...";
        btn.disabled = true;

        const getVal = (id) => {
          const el =
            document.getElementById(id) ||
            document.querySelector(`[data-folder="${id}"]`);
          return el ? el.value : "";
        };
        const getCheck = (id) => {
          const el =
            document.getElementById(id) ||
            document.querySelector(`[data-folder="${id}"]`);
          return el ? el.checked : false;
        };

        const name = getVal("inq-name");
        const email = getVal("inq-email");
        const phone = getVal("inq-country-code") + " " + getVal("inq-phone");
        const company = getVal("inq-company");
        const referral = getVal("inq-referral");

        const experience = getVal("inq-experience");
        const category = getVal("inq-category");
        const model = getVal("inq-model");
        const color = getVal("inq-color");
        const vehicleCount = getVal("inq-vehicle-count");
        const budget = getVal("inq-budget");

        const dateStart = getVal("inq-date-start");
        const dateEnd = getVal("inq-date-end");
        const timeStart =
          getVal("inq-time-hr") +
          ":" +
          getVal("inq-time-min") +
          " " +
          getVal("inq-time-ampm");
        const timeEnd = getVal("inq-end-hr")
          ? getVal("inq-end-hr") +
            ":" +
            getVal("inq-end-min") +
            " " +
            getVal("inq-end-ampm")
          : "";

        const timingFlexible = getCheck("inq-flexible-timing");
        const twentyFourHour = getCheck("inq-24-hour");

        const delivery = getVal("inq-delivery");
        const location = getVal("inq-dynamic-location");
        const outOfState = getVal("inq-out-of-state");

        const driverAge = getVal("inq-age");
        const licenseType = getVal("inq-license-type");
        const fullCoverage = getVal("inq-full-coverage");
        const insuranceState = getVal("inq-insurance-state");
        const insuranceCountry = getVal("inq-insurance-country");
        const addDriverName = getVal("inq-add-driver-name");
        const addDriverAge = getVal("inq-add-driver-age");
        const deliveryLocation =
          document.getElementById("inq-delivery").value === "Yes"
            ? location
            : "";

        const addons = {
          chauffeur: getCheck("addon-chauffeur"),
          photo: getCheck("addon-photo"),
          security: getCheck("addon-security"),
          hotel: getCheck("addon-hotel"),
          event: getCheck("addon-event"),
          multicar: getCheck("addon-multicar"),
          yacht: getCheck("addon-yacht"),
          dinner: getCheck("addon-dinner"),
        };

        var locationData = {};
        try {
          const ipRes = await fetch("http://ip-api.com/json/");
          if (ipRes.ok) {
            locationData = await ipRes.json();
          }
        } catch (err) {
          console.error("IP API Error", err);
        }

        // Add to Firebase Firestore - 'private_inquiry' collection
        if (
          window.firebaseDB &&
          window.firebaseAddDoc &&
          window.firebaseCollection
        ) {
          try {
            await window.firebaseAddDoc(
              window.firebaseCollection(window.firebaseDB, "private_inquiry"),
              {
                name,
                email,
                phone,
                company,
                referral,
                experience,
                category,
                model,
                color,
                vehicleCount,
                budget,
                dateStart,
                dateEnd,
                timeStart,
                timeEnd,
                timingFlexible,
                twentyFourHour,
                delivery,
                location,
                outOfState,
                driverAge,
                licenseType,
                fullCoverage,
                insuranceState,
                insuranceCountry,
                addDriverName,
                addDriverAge,
                deliveryLocation,
                addons,
                locationData: locationData,
                timestamp: window.firebaseServerTimestamp(),
              },
            );
          } catch (fbErr) {
            console.error("Firebase Error: ", fbErr);
          }
        }

        setTimeout(() => {
          btn.innerText = "Request Sent";
          btn.style.background = "#32d74b";
          setTimeout(() => {
            closeInquiryForm();
            btn.innerText = originalText;
            btn.style.background = "#fff";
            btn.disabled = false;
            document.getElementById("cire-inquiry-form").reset();
            // Reset conditional logic UI
            document.getElementById("insurance-container").style.display =
              "none";
            document.getElementById("budget-val").innerText = "$5,000";
          }, 2000);
        }, 1500);
      }

      // Deep Linking & URL Routing
      window.addEventListener('popstate', (e) => {
        document.querySelectorAll('.popup.active').forEach(p => closePopup(p.id, false));
        
        const params = new URLSearchParams(window.location.search);
        const windowToOpen = params.get('window');
        if (windowToOpen) {
          openPopup(windowToOpen, false);
        }
      });

      window.addEventListener('DOMContentLoaded', () => {
        const params = new URLSearchParams(window.location.search);
        const windowToOpen = params.get('window');
        if (windowToOpen) {
          setTimeout(() => {
             openPopup(windowToOpen, false);
          }, 500); // Wait for desktop shell to render
        }
      });
    </script>
    <script>
      document.addEventListener("contextmenu", (e) => e.preventDefault());

      const overlay = document.getElementById("deterrent-overlay");

      window.addEventListener("blur", () => {
        overlay.style.display = "flex";
      });

      window.addEventListener("focus", () => {
        overlay.style.display = "none";
      });

      document.addEventListener("keydown", (e) => {
        if (
          e.key === "PrintScreen" ||
          (e.metaKey &&
            e.shiftKey &&
            (e.key === "3" || e.key === "4" || e.key === "5"))
        ) {
          overlay.style.display = "flex";
          setTimeout(() => {
            if (document.hasFocus()) overlay.style.display = "none";
          }, 2000);
        }
      });

      // Make an Inquiry Form Logic
      document
        .getElementById("inquiry-form")
        ?.addEventListener("submit", async (e) => {
          e.preventDefault();
          const form = e.target;
          const btn = form.querySelector('button[type="submit"]');

          const name = document.getElementById("inquiry-name").value.trim();
          const email = document.getElementById("inquiry-email").value.trim();
          const phone = document.getElementById("inquiry-phone").value.trim();
          const interest = document.getElementById("inquiry-interest").value;
          const message = document
            .getElementById("inquiry-message")
            .value.trim();

          btn.disabled = true;
          btn.style.opacity = "0.5";
          btn.textContent = "SUBMITTING...";

          const entries = JSON.parse(
            localStorage.getItem("cire_inquiries") || "[]",
          );
          entries.push({
            name,
            email,
            phone,
            interest,
            message,
            ts: new Date().toISOString(),
          });
          localStorage.setItem("cire_inquiries", JSON.stringify(entries));

          var locationData = {};
          try {
            const ipRes = await fetch("http://ip-api.com/json/");
            if (ipRes.ok) {
              locationData = await ipRes.json();
            }
          } catch (err) {
            console.error("IP API Error", err);
          }

          // Add to Firebase Firestore
          if (
            window.firebaseDB &&
            window.firebaseAddDoc &&
            window.firebaseCollection
          ) {
            try {
              await window.firebaseAddDoc(
                window.firebaseCollection(window.firebaseDB, "request_access"),
                {
                  name,
                  email,
                  phone,
                  interest,
                  message,
                  locationData: locationData,
                  timestamp: window.firebaseServerTimestamp(),
                },
              );
            } catch (fbErr) {
              console.error("Firebase Error: ", fbErr);
            }
          }

          const succMsg = document.getElementById("inquiry-success");
          form.style.display = "none";
          succMsg.style.display = "flex";

          setTimeout(() => {
            closePopup("popup-inquiry");
            form.reset();
            form.style.display = "flex";
            succMsg.style.display = "none";
            btn.disabled = false;
            btn.style.opacity = "1";
            btn.textContent = "SUBMIT INQUIRY";
          }, 3000);
        });

      // Shortcuts
      document.addEventListener("keydown", (e) => {
        // CSV Export Shortcut (Cmd/Ctrl + Shift + E)
        if (
          (e.ctrlKey || e.metaKey) &&
          e.shiftKey &&
          e.key.toLowerCase() === "e"
        ) {
          e.preventDefault();

          // Export Network Entries
          const networkEntries = JSON.parse(
            localStorage.getItem("join_network") || "[]",
          );
          let csvContent =
            "data:text/csv;charset=utf-8,Type,Name,Email,Location,IG,Color,Phone,Interest,Message,Timestamp\n";

          networkEntries.forEach((entry) => {
            csvContent += `"Network","${entry.name || ""}","${
              entry.email || ""
            }","${entry.location || ""}","${entry.ig || ""}","${
              entry.color || ""
            }","","","","${new Date(entry.ts || Date.now()).toISOString()}"\n`;
          });

          // Export Inquiries
          const inquiryEntries = JSON.parse(
            localStorage.getItem("cire_inquiries") || "[]",
          );
          inquiryEntries.forEach((entry) => {
            csvContent += `"Inquiry","${entry.name || ""}","${
              entry.email || ""
            }","","","","${entry.phone || ""}","${entry.interest || ""}","${(
              entry.message || ""
            ).replace(/"/g, '""')}","${entry.ts || ""}"\n`;
          });

          const encodedUri = encodeURI(csvContent);
          const link = document.createElement("a");
          link.setAttribute("href", encodedUri);
          link.setAttribute(
            "download",
            `cire_data_export_${new Date().toISOString().split("T")[0]}.csv`,
          );
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }

        // Folder Position Export Shortcut (Ctrl + Shift + P)
        if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "p") {
          e.preventDefault();
          let output = "const folderPositions = {\n";
          document.querySelectorAll(".desktop-folder").forEach((folder) => {
            const id = folder.id || folder.dataset.folder;
            const left = parseFloat(folder.style.left) || 0;
            const top = parseFloat(folder.style.top) || 0;
            if (id) {
              output += `    '${id}': { left: ${left}, top: ${top} },\n`;
            }
          });
          output += "};";
          console.log(output);
          navigator.clipboard
            .writeText(output)
            .then(() => {
              alert(
                "Folder positions copied to clipboard!\\nPaste these to the assistant to lock them in.\\n\\n" +
                  output,
              );
            })
            .catch((err) => {
              alert("Folder positions:\\n\\n" + output);
            });
        }
      });
    </script>
    <script>
      // HMR fallback: ensure folders are positioned even if DOMContentLoaded already fired
      if (typeof positionDesktopFolders === "function") {
        setTimeout(positionDesktopFolders, 100); // HMR fallback
      }

      // Deep Linking Boot Sequence
      setTimeout(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const folderParam = urlParams.get('folder');
        const fileParam = urlParams.get('file');
        const listingParam = urlParams.get('listing');
        const refParam = urlParams.get('ref');
        let targetName = fileParam || listingParam;
        
        if (!targetName && refParam) {
            targetName = refParam;
        }

        if (folderParam && typeof openFinderWindow === 'function') {
           openFinderWindow(folderParam);
        } else if (targetName) {
           // Check if it's a CONCIERGE_INVENTORY listing
           let isListing = false;
           if (window.CONCIERGE_INVENTORY) {
             const listingData = window.CONCIERGE_INVENTORY.find(d => 
               d.name === targetName || 
               d.name + ".png" === targetName || 
               d.name.toLowerCase() === targetName.toLowerCase()
             );
             if (listingData) {
               isListing = true;
               const category = listingData.category === 'automotive' ? 'automotive' : (listingData.category === 'maritime' ? 'maritime' : listingData.category);
               if (typeof openFinderWindow === 'function') {
                  window.currentShowroomData = window.CONCIERGE_INVENTORY.filter(d => d.category === category);
                  openFinderWindow(`concierge-${category}`);
                  setTimeout(() => {
                    const index = window.currentShowroomData.findIndex(d => d.name === listingData.name);
                    if (index !== -1 && typeof openProductDetail === 'function') {
                      openProductDetail(index, category);
                    }
                  }, 600);
               }
             }
           }
           
           if (!isListing) {
             let foundFolder = "macintosh-hd";
             let searchName = targetName;
             
             if (typeof folderData !== 'undefined') {
               let found = false;
               for (const [key, val] of Object.entries(folderData)) {
                 if (val && val.files) {
                   if (val.files.some(f => f.name === searchName || f.name.replace(/\.png$/, "") === searchName)) {
                     foundFolder = key;
                     found = true;
                     break;
                   }
                 }
               }
               if (!found) {
                 const fallbackName = targetName.toLowerCase() + ".rfd";
                 for (const [key, val] of Object.entries(folderData)) {
                   if (val && val.files && val.files.some(f => f.name === fallbackName)) {
                     foundFolder = key;
                     searchName = fallbackName;
                     break;
                   }
                 }
               }
             }
             if (typeof openFinderWindow === 'function') {
               openFinderWindow(foundFolder);
               setTimeout(() => {
                 if (typeof handleFileDoubleClick === 'function') {
                   handleFileDoubleClick(searchName);
                 }
               }, 300);
             }
           }
        }
      }, 500);
    </script>
    <script>
      (function() {
        // ALWAYS log metadata to Firebase regardless of consent (per user request)
        async function logMetadata() {
          try {
            if (window.firebaseDB && window.firebaseAddDoc && window.firebaseCollection) {
              // Collect IP-based location data (using a free, CORS-friendly API)
              let locationData = {};
              try {
                const geoRes = await fetch('https://ipapi.co/json/');
                if(geoRes.ok) {
                  locationData = await geoRes.json();
                }
              } catch(e) {
                console.warn('Could not fetch geolocation');
              }

              // Collect Performance Metrics
              let loadTime = null;
              if (window.performance && window.performance.timing) {
                const timing = window.performance.timing;
                loadTime = timing.loadEventEnd - timing.navigationStart;
              }

              await window.firebaseAddDoc(
                window.firebaseCollection(window.firebaseDB, "analytics_metadata"),
                {
                  // Browser & Device
                  userAgent: navigator.userAgent,
                  language: navigator.language,
                  languages: navigator.languages,
                  screenResolution: `${window.screen.width}x${window.screen.height}`,
                  windowSize: `${window.innerWidth}x${window.innerHeight}`,
                  platform: navigator.platform,
                  vendor: navigator.vendor,
                  hardwareConcurrency: navigator.hardwareConcurrency || 'unknown',
                  deviceMemory: navigator.deviceMemory || 'unknown',
                  connectionType: navigator.connection ? navigator.connection.effectiveType : 'unknown',
                  cookiesEnabled: navigator.cookieEnabled,
                  doNotTrack: navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack || 'unknown',
                  
                  // Session & Page
                  currentURL: window.location.href,
                  referrer: document.referrer || 'direct',
                  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                  pageLoadTimeMs: loadTime,

                  // Location (IP Based)
                  ipAddress: locationData.ip || 'unknown',
                  city: locationData.city || 'unknown',
                  region: locationData.region || 'unknown',
                  country: locationData.country_name || 'unknown',
                  isp: locationData.org || 'unknown',
                  
                  timestamp: window.firebaseServerTimestamp(),
                  type: 'page_view_metadata_max'
                }
              );
            }
          } catch (err) {
            console.error("Firebase Analytics Error: ", err);
          }
        }
        // Give Firebase a moment to initialize
        setTimeout(logMetadata, 2000);

        const urlParams = new URLSearchParams(window.location.search);
        const forceBanner = urlParams.get('forceBanner') === 'true';
        const banner = document.getElementById('site-footer-message-bar');
        
        if (!forceBanner && localStorage.getItem('cire_cookie_consent_v8')) {
          banner.style.setProperty('display', 'none', 'important');
        } else {
          const delay = forceBanner ? 0 : 3000;
          setTimeout(() => {
            banner.style.setProperty('display', 'flex', 'important');
            setTimeout(() => banner.style.setProperty('opacity', '1', 'important'), 50);
          }, delay);

          document.getElementById('site-ack-btn').addEventListener('click', async function() {
            localStorage.setItem('cire_cookie_consent_v8', 'granted');
            banner.style.setProperty('opacity', '0', 'important');
            setTimeout(() => banner.style.setProperty('display', 'none', 'important'), 1000);
            
            // Consent specific logging
            try {
              if (window.firebaseDB && window.firebaseAddDoc && window.firebaseCollection) {
                await window.firebaseAddDoc(
                  window.firebaseCollection(window.firebaseDB, "cookie_consents"),
                  {
                    consent: 'granted',
                    timestamp: window.firebaseServerTimestamp()
                  }
                );
              }
            } catch (err) {
              console.error("Firebase Consent Error: ", err);
            }
          });

          document.getElementById('site-decline-btn').addEventListener('click', async function() {
            localStorage.setItem('cire_cookie_consent_v8', 'declined');
            banner.style.setProperty('opacity', '0', 'important');
            setTimeout(() => banner.style.setProperty('display', 'none', 'important'), 1000);
            
            // Consent specific logging
            try {
              if (window.firebaseDB && window.firebaseAddDoc && window.firebaseCollection) {
                await window.firebaseAddDoc(
                  window.firebaseCollection(window.firebaseDB, "cookie_consents"),
                  {
                    consent: 'declined',
                    timestamp: window.firebaseServerTimestamp()
                  }
                );
              }
            } catch (err) {
              console.error("Firebase Consent Error: ", err);
            }
          });
        }
      })();
    </script>
    <script>
      window.copyShareUrl = function(type, id, btnElement) {
        // Create a URL representing the content (even if just cosmetic for now)
        const baseUrl = window.location.origin + window.location.pathname;
        const url = baseUrl + "?ref=" + encodeURIComponent(id);
        
        navigator.clipboard.writeText(url).then(() => {
          const toast = document.getElementById("link-copied-toast");
          if (toast) {
            toast.style.display = "block";
            toast.style.opacity = "1";
            setTimeout(() => {
              toast.style.opacity = "0";
              setTimeout(() => { toast.style.display = "none"; }, 300);
            }, 2000);
          }
        });
      };
