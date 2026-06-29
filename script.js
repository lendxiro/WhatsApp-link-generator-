/* ================================================
   WALink — script.js
   Country data · QR · copy · download · animations
   ================================================ */

// ── Countries ────────────────────────────────
const COUNTRIES = [
  { name: "Afghanistan",            dial: "+93"   },
  { name: "Albania",                dial: "+355"  },
  { name: "Algeria",                dial: "+213"  },
  { name: "Argentina",              dial: "+54"   },
  { name: "Armenia",                dial: "+374"  },
  { name: "Australia",              dial: "+61"   },
  { name: "Austria",                dial: "+43"   },
  { name: "Azerbaijan",             dial: "+994"  },
  { name: "Bahrain",                dial: "+973"  },
  { name: "Bangladesh",             dial: "+880"  },
  { name: "Belarus",                dial: "+375"  },
  { name: "Belgium",                dial: "+32"   },
  { name: "Bolivia",                dial: "+591"  },
  { name: "Bosnia & Herzegovina",   dial: "+387"  },
  { name: "Brazil",                 dial: "+55"   },
  { name: "Bulgaria",               dial: "+359"  },
  { name: "Cambodia",               dial: "+855"  },
  { name: "Cameroon",               dial: "+237"  },
  { name: "Canada",                 dial: "+1"    },
  { name: "Chile",                  dial: "+56"   },
  { name: "China",                  dial: "+86"   },
  { name: "Colombia",               dial: "+57"   },
  { name: "Costa Rica",             dial: "+506"  },
  { name: "Croatia",                dial: "+385"  },
  { name: "Cuba",                   dial: "+53"   },
  { name: "Cyprus",                 dial: "+357"  },
  { name: "Czech Republic",         dial: "+420"  },
  { name: "Denmark",                dial: "+45"   },
  { name: "Dominican Republic",     dial: "+1809" },
  { name: "Ecuador",                dial: "+593"  },
  { name: "Egypt",                  dial: "+20"   },
  { name: "El Salvador",            dial: "+503"  },
  { name: "Estonia",                dial: "+372"  },
  { name: "Ethiopia",               dial: "+251"  },
  { name: "Finland",                dial: "+358"  },
  { name: "France",                 dial: "+33"   },
  { name: "Georgia",                dial: "+995"  },
  { name: "Germany",                dial: "+49"   },
  { name: "Ghana",                  dial: "+233"  },
  { name: "Greece",                 dial: "+30"   },
  { name: "Guatemala",              dial: "+502"  },
  { name: "Honduras",               dial: "+504"  },
  { name: "Hong Kong",              dial: "+852"  },
  { name: "Hungary",                dial: "+36"   },
  { name: "Iceland",                dial: "+354"  },
  { name: "India",                  dial: "+91"   },
  { name: "Indonesia",              dial: "+62"   },
  { name: "Iran",                   dial: "+98"   },
  { name: "Iraq",                   dial: "+964"  },
  { name: "Ireland",                dial: "+353"  },
  { name: "Israel",                 dial: "+972"  },
  { name: "Italy",                  dial: "+39"   },
  { name: "Jamaica",                dial: "+1876" },
  { name: "Japan",                  dial: "+81"   },
  { name: "Jordan",                 dial: "+962"  },
  { name: "Kazakhstan",             dial: "+7"    },
  { name: "Kenya",                  dial: "+254"  },
  { name: "Kuwait",                 dial: "+965"  },
  { name: "Kyrgyzstan",             dial: "+996"  },
  { name: "Latvia",                 dial: "+371"  },
  { name: "Lebanon",                dial: "+961"  },
  { name: "Libya",                  dial: "+218"  },
  { name: "Lithuania",              dial: "+370"  },
  { name: "Luxembourg",             dial: "+352"  },
  { name: "Malaysia",               dial: "+60"   },
  { name: "Mexico",                 dial: "+52"   },
  { name: "Moldova",                dial: "+373"  },
  { name: "Morocco",                dial: "+212"  },
  { name: "Mozambique",             dial: "+258"  },
  { name: "Myanmar",                dial: "+95"   },
  { name: "Nepal",                  dial: "+977"  },
  { name: "Netherlands",            dial: "+31"   },
  { name: "New Zealand",            dial: "+64"   },
  { name: "Nicaragua",              dial: "+505"  },
  { name: "Nigeria",                dial: "+234"  },
  { name: "North Macedonia",        dial: "+389"  },
  { name: "Norway",                 dial: "+47"   },
  { name: "Oman",                   dial: "+968"  },
  { name: "Pakistan",               dial: "+92"   },
  { name: "Palestine",              dial: "+970"  },
  { name: "Panama",                 dial: "+507"  },
  { name: "Paraguay",               dial: "+595"  },
  { name: "Peru",                   dial: "+51"   },
  { name: "Philippines",            dial: "+63"   },
  { name: "Poland",                 dial: "+48"   },
  { name: "Portugal",               dial: "+351"  },
  { name: "Qatar",                  dial: "+974"  },
  { name: "Romania",                dial: "+40"   },
  { name: "Russia",                 dial: "+7"    },
  { name: "Saudi Arabia",           dial: "+966"  },
  { name: "Senegal",                dial: "+221"  },
  { name: "Serbia",                 dial: "+381"  },
  { name: "Singapore",              dial: "+65"   },
  { name: "Slovakia",               dial: "+421"  },
  { name: "Slovenia",               dial: "+386"  },
  { name: "Somalia",                dial: "+252"  },
  { name: "South Africa",           dial: "+27"   },
  { name: "South Korea",            dial: "+82"   },
  { name: "Spain",                  dial: "+34"   },
  { name: "Sri Lanka",              dial: "+94"   },
  { name: "Sudan",                  dial: "+249"  },
  { name: "Sweden",                 dial: "+46"   },
  { name: "Switzerland",            dial: "+41"   },
  { name: "Syria",                  dial: "+963"  },
  { name: "Taiwan",                 dial: "+886"  },
  { name: "Tanzania",               dial: "+255"  },
  { name: "Thailand",               dial: "+66"   },
  { name: "Tunisia",                dial: "+216"  },
  { name: "Turkey",                 dial: "+90"   },
  { name: "Uganda",                 dial: "+256"  },
  { name: "Ukraine",                dial: "+380"  },
  { name: "United Arab Emirates",   dial: "+971"  },
  { name: "United Kingdom",         dial: "+44"   },
  { name: "United States",          dial: "+1"    },
  { name: "Uruguay",                dial: "+598"  },
  { name: "Uzbekistan",             dial: "+998"  },
  { name: "Venezuela",              dial: "+58"   },
  { name: "Vietnam",                dial: "+84"   },
  { name: "Yemen",                  dial: "+967"  },
  { name: "Zimbabwe",               dial: "+263"  },
];

// ── DOM ──────────────────────────────────────
const $ = id => document.getElementById(id);
const countrySelect = $("country-code");
const dialBadge     = $("dial-badge");
const phoneInput    = $("phone-number");
const messageInput  = $("message");
const charPill      = $("char-pill");
const generateBtn   = $("generate-btn");
const errorBox      = $("error-box");
const errorMsg      = $("error-msg");
const cardDivider   = $("card-divider");
const resultSection = $("result-section");
const linkValue     = $("link-value");
const qrCanvas      = $("qr-canvas");
const copyIconBtn   = $("copy-icon-btn");
const copyBtn       = $("copy-btn");
const openBtn       = $("open-btn");
const downloadBtn   = $("download-btn");
const resetBtn      = $("reset-btn");
const toast         = $("toast");
const toastMsg      = $("toast-msg");

let currentLink  = "";
let toastTimer   = null;

// ── Populate countries ───────────────────────
function populateCountries() {
  // US first, then alphabetical
  const sorted = [...COUNTRIES].sort((a, b) => {
    if (a.name === "United States") return -1;
    if (b.name === "United States") return  1;
    return a.name.localeCompare(b.name);
  });

  sorted.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.dial;
    opt.textContent = `${c.name}  ${c.dial}`;
    if (c.name === "United States") opt.selected = true;
    countrySelect.appendChild(opt);
  });
  syncDialBadge();
}

function syncDialBadge() {
  dialBadge.textContent = countrySelect.value;
}

// ── Validation ───────────────────────────────
function showError(msg) {
  errorMsg.textContent = msg;
  errorBox.hidden = false;
  phoneInput.setAttribute("aria-invalid", "true");
}

function hideError() {
  errorBox.hidden = true;
  phoneInput.removeAttribute("aria-invalid");
}

function sanitize(raw) { return raw.replace(/\D/g, ""); }

function validate(digits) {
  if (!digits)          return "Enter a phone number to continue.";
  if (digits.length < 4) return "That number looks too short.";
  if (digits.length > 15) return "Phone numbers can't exceed 15 digits (E.164).";
  return null;
}

// ── Build link ───────────────────────────────
function buildLink(dialCode, digits, text) {
  const code = dialCode.replace(/\D/g, "");
  const num  = code + digits;
  const base = `https://wa.me/${num}`;
  return text.trim() ? `${base}?text=${encodeURIComponent(text.trim())}` : base;
}

// ── QR ───────────────────────────────────────
function renderQR(url) {
  qrCanvas.innerHTML = "";
  new QRCode(qrCanvas, {
    text:          url,
    width:         200,
    height:        200,
    colorDark:     "#0f0c29",
    colorLight:    "#ffffff",
    correctLevel:  QRCode.CorrectLevel.Q,
  });
}

// ── Generate ─────────────────────────────────
function generate() {
  hideError();

  const digits = sanitize(phoneInput.value);
  const err    = validate(digits);
  if (err) { showError(err); phoneInput.focus(); return; }

  const text = messageInput.value;
  currentLink = buildLink(countrySelect.value, digits, text);

  linkValue.textContent = currentLink;

  renderQR(currentLink);

  // Show result with animation
  cardDivider.hidden   = false;
  resultSection.hidden = false;

  // Re-trigger animation on repeat
  resultSection.style.animation = "none";
  void resultSection.offsetHeight;
  resultSection.style.animation = "";

  // Scroll to result on mobile
  if (window.innerWidth < 640) {
    setTimeout(() => {
      resultSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 80);
  }
}

// ── Copy ─────────────────────────────────────
async function copyLink(fromIcon = false) {
  if (!currentLink) return;
  try {
    await navigator.clipboard.writeText(currentLink);
  } catch {
    // Fallback
    const ta = document.createElement("textarea");
    ta.value = currentLink;
    Object.assign(ta.style, { position: "fixed", opacity: "0", top: "0" });
    document.body.appendChild(ta);
    ta.focus(); ta.select();
    try { document.execCommand("copy"); } catch {}
    document.body.removeChild(ta);
  }
  showToast("Link copied to clipboard!");
  if (fromIcon) flashCopyIcon();
}

const CHECK_ICON = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9l5 5 7-8" stroke="#25D366" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const COPY_ICON  = `<svg id="copy-svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="6" y="6" width="9" height="9" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M12 6V4.5A1.5 1.5 0 0 0 10.5 3H4.5A1.5 1.5 0 0 0 3 4.5v6A1.5 1.5 0 0 0 4.5 12H6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`;

function flashCopyIcon() {
  copyIconBtn.innerHTML = CHECK_ICON;
  copyIconBtn.style.color = "var(--green)";
  setTimeout(() => {
    copyIconBtn.innerHTML = COPY_ICON;
    copyIconBtn.style.color = "";
  }, 2000);
}

// ── Open ─────────────────────────────────────
function openWhatsApp() {
  if (!currentLink) return;
  window.open(currentLink, "_blank", "noopener,noreferrer");
}

// ── Download QR ──────────────────────────────
function downloadQR() {
  if (!currentLink) return;

  const canvas = qrCanvas.querySelector("canvas");
  if (canvas) {
    exportCanvas(canvas); return;
  }

  // Img fallback
  const img = qrCanvas.querySelector("img");
  if (!img) return;
  const tmp = document.createElement("canvas");
  tmp.width = tmp.height = 200;
  const ctx = tmp.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, 200, 200);
  ctx.drawImage(img, 0, 0, 200, 200);
  exportCanvas(tmp);
}

function exportCanvas(canvas) {
  canvas.toBlob(blob => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a   = Object.assign(document.createElement("a"), {
      href: url, download: "walink-qr.png"
    });
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("QR code saved!");
  }, "image/png");
}

// ── Reset ────────────────────────────────────
function reset() {
  currentLink = "";
  resultSection.hidden = true;
  cardDivider.hidden   = true;
  phoneInput.value     = "";
  messageInput.value   = "";
  charPill.textContent = "0";
  qrCanvas.innerHTML   = "";
  linkValue.textContent = "";
  hideError();
  phoneInput.focus();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ── Toast ─────────────────────────────────────
function showToast(msg) {
  toastMsg.textContent = msg;
  clearTimeout(toastTimer);
  toast.classList.add("visible");
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 2400);
}

// ── Char counter ──────────────────────────────
function updateCharCount() {
  charPill.textContent = messageInput.value.length;
}

// ── Phone key filter ──────────────────────────
function filterPhoneKey(e) {
  const pass = [
    "Backspace","Delete","Tab","Escape","Enter",
    "ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"
  ];
  if (pass.includes(e.key) || e.ctrlKey || e.metaKey) return;
  if (/^[0-9 \-+().]$/.test(e.key)) return;
  e.preventDefault();
}

// ── Events ────────────────────────────────────
countrySelect.addEventListener("change", syncDialBadge);
phoneInput.addEventListener("keydown", filterPhoneKey);
phoneInput.addEventListener("keydown", e => { if (e.key === "Enter") generate(); });
messageInput.addEventListener("input", updateCharCount);
generateBtn.addEventListener("click", generate);
copyIconBtn.addEventListener("click", () => copyLink(true));
copyBtn.addEventListener("click", () => copyLink(false));
openBtn.addEventListener("click", openWhatsApp);
downloadBtn.addEventListener("click", downloadQR);
resetBtn.addEventListener("click", reset);

// ── Boot ──────────────────────────────────────
populateCountries();
