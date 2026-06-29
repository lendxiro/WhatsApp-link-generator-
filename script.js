/* =============================================
   WALink – script.js
   Handles: country list, QR generation,
   link building, copy, open, download
   ============================================= */

// ── Country / dial-code data ─────────────────
const COUNTRIES = [
  { name: "Afghanistan", code: "AF", dial: "+93" },
  { name: "Albania", code: "AL", dial: "+355" },
  { name: "Algeria", code: "DZ", dial: "+213" },
  { name: "Argentina", code: "AR", dial: "+54" },
  { name: "Armenia", code: "AM", dial: "+374" },
  { name: "Australia", code: "AU", dial: "+61" },
  { name: "Austria", code: "AT", dial: "+43" },
  { name: "Azerbaijan", code: "AZ", dial: "+994" },
  { name: "Bahrain", code: "BH", dial: "+973" },
  { name: "Bangladesh", code: "BD", dial: "+880" },
  { name: "Belarus", code: "BY", dial: "+375" },
  { name: "Belgium", code: "BE", dial: "+32" },
  { name: "Bolivia", code: "BO", dial: "+591" },
  { name: "Bosnia and Herzegovina", code: "BA", dial: "+387" },
  { name: "Brazil", code: "BR", dial: "+55" },
  { name: "Bulgaria", code: "BG", dial: "+359" },
  { name: "Cambodia", code: "KH", dial: "+855" },
  { name: "Cameroon", code: "CM", dial: "+237" },
  { name: "Canada", code: "CA", dial: "+1" },
  { name: "Chile", code: "CL", dial: "+56" },
  { name: "China", code: "CN", dial: "+86" },
  { name: "Colombia", code: "CO", dial: "+57" },
  { name: "Costa Rica", code: "CR", dial: "+506" },
  { name: "Croatia", code: "HR", dial: "+385" },
  { name: "Cuba", code: "CU", dial: "+53" },
  { name: "Cyprus", code: "CY", dial: "+357" },
  { name: "Czech Republic", code: "CZ", dial: "+420" },
  { name: "Denmark", code: "DK", dial: "+45" },
  { name: "Dominican Republic", code: "DO", dial: "+1-809" },
  { name: "Ecuador", code: "EC", dial: "+593" },
  { name: "Egypt", code: "EG", dial: "+20" },
  { name: "El Salvador", code: "SV", dial: "+503" },
  { name: "Estonia", code: "EE", dial: "+372" },
  { name: "Ethiopia", code: "ET", dial: "+251" },
  { name: "Finland", code: "FI", dial: "+358" },
  { name: "France", code: "FR", dial: "+33" },
  { name: "Georgia", code: "GE", dial: "+995" },
  { name: "Germany", code: "DE", dial: "+49" },
  { name: "Ghana", code: "GH", dial: "+233" },
  { name: "Greece", code: "GR", dial: "+30" },
  { name: "Guatemala", code: "GT", dial: "+502" },
  { name: "Honduras", code: "HN", dial: "+504" },
  { name: "Hong Kong", code: "HK", dial: "+852" },
  { name: "Hungary", code: "HU", dial: "+36" },
  { name: "Iceland", code: "IS", dial: "+354" },
  { name: "India", code: "IN", dial: "+91" },
  { name: "Indonesia", code: "ID", dial: "+62" },
  { name: "Iran", code: "IR", dial: "+98" },
  { name: "Iraq", code: "IQ", dial: "+964" },
  { name: "Ireland", code: "IE", dial: "+353" },
  { name: "Israel", code: "IL", dial: "+972" },
  { name: "Italy", code: "IT", dial: "+39" },
  { name: "Jamaica", code: "JM", dial: "+1-876" },
  { name: "Japan", code: "JP", dial: "+81" },
  { name: "Jordan", code: "JO", dial: "+962" },
  { name: "Kazakhstan", code: "KZ", dial: "+7" },
  { name: "Kenya", code: "KE", dial: "+254" },
  { name: "Kuwait", code: "KW", dial: "+965" },
  { name: "Kyrgyzstan", code: "KG", dial: "+996" },
  { name: "Latvia", code: "LV", dial: "+371" },
  { name: "Lebanon", code: "LB", dial: "+961" },
  { name: "Libya", code: "LY", dial: "+218" },
  { name: "Lithuania", code: "LT", dial: "+370" },
  { name: "Luxembourg", code: "LU", dial: "+352" },
  { name: "Malaysia", code: "MY", dial: "+60" },
  { name: "Mexico", code: "MX", dial: "+52" },
  { name: "Moldova", code: "MD", dial: "+373" },
  { name: "Morocco", code: "MA", dial: "+212" },
  { name: "Mozambique", code: "MZ", dial: "+258" },
  { name: "Myanmar", code: "MM", dial: "+95" },
  { name: "Nepal", code: "NP", dial: "+977" },
  { name: "Netherlands", code: "NL", dial: "+31" },
  { name: "New Zealand", code: "NZ", dial: "+64" },
  { name: "Nicaragua", code: "NI", dial: "+505" },
  { name: "Nigeria", code: "NG", dial: "+234" },
  { name: "North Macedonia", code: "MK", dial: "+389" },
  { name: "Norway", code: "NO", dial: "+47" },
  { name: "Oman", code: "OM", dial: "+968" },
  { name: "Pakistan", code: "PK", dial: "+92" },
  { name: "Palestine", code: "PS", dial: "+970" },
  { name: "Panama", code: "PA", dial: "+507" },
  { name: "Paraguay", code: "PY", dial: "+595" },
  { name: "Peru", code: "PE", dial: "+51" },
  { name: "Philippines", code: "PH", dial: "+63" },
  { name: "Poland", code: "PL", dial: "+48" },
  { name: "Portugal", code: "PT", dial: "+351" },
  { name: "Qatar", code: "QA", dial: "+974" },
  { name: "Romania", code: "RO", dial: "+40" },
  { name: "Russia", code: "RU", dial: "+7" },
  { name: "Saudi Arabia", code: "SA", dial: "+966" },
  { name: "Senegal", code: "SN", dial: "+221" },
  { name: "Serbia", code: "RS", dial: "+381" },
  { name: "Singapore", code: "SG", dial: "+65" },
  { name: "Slovakia", code: "SK", dial: "+421" },
  { name: "Slovenia", code: "SI", dial: "+386" },
  { name: "Somalia", code: "SO", dial: "+252" },
  { name: "South Africa", code: "ZA", dial: "+27" },
  { name: "South Korea", code: "KR", dial: "+82" },
  { name: "Spain", code: "ES", dial: "+34" },
  { name: "Sri Lanka", code: "LK", dial: "+94" },
  { name: "Sudan", code: "SD", dial: "+249" },
  { name: "Sweden", code: "SE", dial: "+46" },
  { name: "Switzerland", code: "CH", dial: "+41" },
  { name: "Syria", code: "SY", dial: "+963" },
  { name: "Taiwan", code: "TW", dial: "+886" },
  { name: "Tanzania", code: "TZ", dial: "+255" },
  { name: "Thailand", code: "TH", dial: "+66" },
  { name: "Tunisia", code: "TN", dial: "+216" },
  { name: "Turkey", code: "TR", dial: "+90" },
  { name: "Uganda", code: "UG", dial: "+256" },
  { name: "Ukraine", code: "UA", dial: "+380" },
  { name: "United Arab Emirates", code: "AE", dial: "+971" },
  { name: "United Kingdom", code: "GB", dial: "+44" },
  { name: "United States", code: "US", dial: "+1" },
  { name: "Uruguay", code: "UY", dial: "+598" },
  { name: "Uzbekistan", code: "UZ", dial: "+998" },
  { name: "Venezuela", code: "VE", dial: "+58" },
  { name: "Vietnam", code: "VN", dial: "+84" },
  { name: "Yemen", code: "YE", dial: "+967" },
  { name: "Zimbabwe", code: "ZW", dial: "+263" },
];

// ── DOM refs ─────────────────────────────────
const countrySelect  = document.getElementById("country-code");
const dialPrefix     = document.getElementById("dial-prefix");
const phoneInput     = document.getElementById("phone-number");
const messageInput   = document.getElementById("message");
const charCount      = document.getElementById("char-count");
const generateBtn    = document.getElementById("generate-btn");
const errorBanner    = document.getElementById("error-banner");
const errorText      = document.getElementById("error-text");
const resultEmpty    = document.getElementById("result-empty");
const resultContent  = document.getElementById("result-content");
const linkTextEl     = document.getElementById("link-text");
const qrCanvas       = document.getElementById("qr-canvas");
const copyBtn        = document.getElementById("copy-btn");
const copyInlineBtn  = document.getElementById("copy-inline-btn");
const openBtn        = document.getElementById("open-btn");
const downloadBtn    = document.getElementById("download-btn");
const toast          = document.getElementById("toast");

// Holds last generated URL
let currentLink = "";
let qrInstance  = null;
let toastTimer  = null;

// ── Populate country select ──────────────────
function populateCountries() {
  // Sort: US first, then alphabetically
  const sorted = [...COUNTRIES].sort((a, b) => {
    if (a.code === "US") return -1;
    if (b.code === "US") return  1;
    return a.name.localeCompare(b.name);
  });

  sorted.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.dial;
    opt.textContent = `${c.name} (${c.dial})`;
    if (c.code === "US") opt.selected = true;
    countrySelect.appendChild(opt);
  });

  updateDialPrefix();
}

function updateDialPrefix() {
  dialPrefix.textContent = countrySelect.value;
}

// ── Validation ───────────────────────────────
function showError(msg) {
  errorText.textContent = msg;
  errorBanner.hidden = false;
  phoneInput.setAttribute("aria-invalid", "true");
}

function clearError() {
  errorBanner.hidden = true;
  phoneInput.removeAttribute("aria-invalid");
}

function sanitizePhone(raw) {
  // Strip everything except digits
  return raw.replace(/\D/g, "");
}

function validate(digits) {
  if (!digits) return "Phone number is required.";
  if (digits.length < 5) return "Phone number is too short.";
  if (digits.length > 15) return "Phone number exceeds 15 digits (E.164 limit).";
  return null;
}

// ── Build WhatsApp link ──────────────────────
function buildLink(dialCode, digits, message) {
  // Strip the + from dialCode for the URL
  const intlCode = dialCode.replace("+", "").replace("-", "");
  const fullNumber = intlCode + digits;
  const base = `https://wa.me/${fullNumber}`;
  if (message.trim()) {
    return base + "?text=" + encodeURIComponent(message.trim());
  }
  return base;
}

// ── QR code ─────────────────────────────────
function renderQR(url) {
  // Clear previous QR
  qrCanvas.innerHTML = "";
  qrInstance = null;

  qrInstance = new QRCode(qrCanvas, {
    text:           url,
    width:          200,
    height:         200,
    colorDark:      "#111827",
    colorLight:     "#ffffff",
    correctLevel:   QRCode.CorrectLevel.Q,
  });
}

// ── Generate ─────────────────────────────────
function generate() {
  clearError();

  const rawPhone = phoneInput.value;
  const digits   = sanitizePhone(rawPhone);
  const errMsg   = validate(digits);

  if (errMsg) {
    showError(errMsg);
    phoneInput.focus();
    return;
  }

  const dialCode = countrySelect.value;
  const message  = messageInput.value;
  currentLink    = buildLink(dialCode, digits, message);

  // Update link display
  linkTextEl.textContent = currentLink;
  linkTextEl.setAttribute("aria-label", "Generated link: " + currentLink);

  // Render QR
  renderQR(currentLink);

  // Show result panel
  resultEmpty.hidden   = true;
  resultContent.hidden = false;
  // Force re-animation on re-generation
  resultContent.style.animation = "none";
  requestAnimationFrame(() => {
    resultContent.style.animation = "";
  });

  // Scroll result into view on mobile
  if (window.innerWidth < 720) {
    const resultPanel = document.getElementById("result-panel");
    setTimeout(() => {
      resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  }
}

// ── Copy ─────────────────────────────────────
async function copyLink() {
  if (!currentLink) return;
  try {
    await navigator.clipboard.writeText(currentLink);
    showToast("Link copied!");
    // Animate inline copy button
    setInlineCopySuccess();
  } catch {
    // Fallback for older browsers
    const ta = document.createElement("textarea");
    ta.value = currentLink;
    ta.style.position = "fixed";
    ta.style.opacity  = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try { document.execCommand("copy"); } catch {}
    document.body.removeChild(ta);
    showToast("Link copied!");
  }
}

function setInlineCopySuccess() {
  copyInlineBtn.innerHTML = `
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10l5 5 7-9" stroke="#25D366" stroke-width="1.8"
        stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
  copyInlineBtn.style.color = "var(--green)";
  setTimeout(() => {
    copyInlineBtn.innerHTML = `
      <svg viewBox="0 0 20 20" fill="none">
        <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.5"/>
        <path d="M13 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
          stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    `;
    copyInlineBtn.style.color = "";
  }, 1800);
}

// ── Open in WhatsApp ──────────────────────────
function openWhatsApp() {
  if (!currentLink) return;
  window.open(currentLink, "_blank", "noopener,noreferrer");
}

// ── Download QR as PNG ───────────────────────
function downloadQR() {
  if (!currentLink) return;

  // QRCode.js creates a canvas element
  const canvas = qrCanvas.querySelector("canvas");
  if (!canvas) {
    // Some browsers render img instead — convert to canvas first
    const img = qrCanvas.querySelector("img");
    if (!img) return;

    const tmpCanvas = document.createElement("canvas");
    const size = 200;
    tmpCanvas.width  = size;
    tmpCanvas.height = size;
    const ctx = tmpCanvas.getContext("2d");
    // White background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, size, size);
    ctx.drawImage(img, 0, 0, size, size);
    triggerDownload(tmpCanvas, "walink-qr.png");
    return;
  }

  triggerDownload(canvas, "walink-qr.png");
}

function triggerDownload(canvas, filename) {
  canvas.toBlob(blob => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a   = document.createElement("a");
    a.href     = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("QR code downloaded!");
  }, "image/png");
}

// ── Toast ────────────────────────────────────
function showToast(msg) {
  toast.textContent = msg;
  clearTimeout(toastTimer);
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

// ── Character counter ────────────────────────
function updateCharCount() {
  charCount.textContent = messageInput.value.length;
}

// ── Allow only numeric + formatting chars ────
function handlePhoneKeydown(e) {
  // Allow: backspace, delete, tab, escape, enter, arrows, home, end
  const allowed = ["Backspace","Delete","Tab","Escape","Enter",
    "ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"];
  if (allowed.includes(e.key)) return;
  // Allow Ctrl/Cmd combos (copy, paste, select all)
  if (e.ctrlKey || e.metaKey) return;
  // Allow digits and common separator keys
  if (/^[0-9 +\-().#*]$/.test(e.key)) return;
  e.preventDefault();
}

// ── Event listeners ──────────────────────────
countrySelect.addEventListener("change", updateDialPrefix);
phoneInput.addEventListener("keydown", handlePhoneKeydown);
messageInput.addEventListener("input", updateCharCount);
generateBtn.addEventListener("click", generate);
copyBtn.addEventListener("click", copyLink);
copyInlineBtn.addEventListener("click", copyLink);
openBtn.addEventListener("click", openWhatsApp);
downloadBtn.addEventListener("click", downloadQR);

// Generate on Enter in phone field
phoneInput.addEventListener("keydown", e => {
  if (e.key === "Enter") generate();
});

// ── Init ─────────────────────────────────────
populateCountries();
