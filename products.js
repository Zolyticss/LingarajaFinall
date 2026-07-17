function lgProductCard(brand, p, bc) {
  const photo = p.image;

  const media = `
      <img class="pcard-image" src="${photo}" alt="${p.name}" loading="lazy" />
      <div class="pcard-image-scrim"></div>`;

  const hasRealPdf = !!p.pdf;

  const downloadAction = hasRealPdf
    ? `<a href="${p.pdf}" target="_blank" rel="noopener" class="btn btn-primary" title="Download the official English datasheet for this SKU">
          <i class="bi bi-download"></i>&nbsp; Download
        </a>`
    : `<button type="button" class="btn btn-primary js-product-info"
          data-brand="${brand}"
          data-name="${encodeURIComponent(p.name)}"
          data-sku="${encodeURIComponent(p.sku)}"
          data-hs="${encodeURIComponent(p.hs)}"
          data-spec="${encodeURIComponent(p.spec || "")}"
          data-desc="${encodeURIComponent(p.detail || p.desc)}"
          data-bc="${bc}"
          title="No official datasheet available for this SKU yet — view product details">
          <i class="bi bi-info-circle"></i>&nbsp; Product Info
        </button>`;

  return `
  <div class="pcard pcard-top" style="--bc:${bc}" data-type="${(p.type + " " + (p.spec || "")).trim()}" data-reveal>
    <div class="pcard-media has-photo">
      <span class="pcard-badge">${brand}</span>
      <span class="pcard-wish" title="Save">&#9733;</span>${media}
      <span class="pcard-type">${p.type}</span>
    </div>
    <div class="pcard-body">
      <div class="pcard-sku">SKU ${p.sku} &middot; HS ${p.hs}</div>
      <h4>${p.name}</h4>
      <p>${p.desc}</p>
      <div class="pcard-actions">
        ${downloadAction}
        <a href="https://wa.me/919999999999?text=${encodeURIComponent("Hi, I need pricing for " + brand + " " + p.name + " (SKU " + p.sku + ")")}" target="_blank" class="btn btn-ghost" title="WhatsApp Enquiry">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.1 8.1 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1s-.7.8-.9 1c-.2.2-.3.2-.6.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5.2-.4a.5.5 0 0 0 0-.4c-.1-.1-.6-1.5-.9-2-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.3 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4c.6.3 1.1.4 1.5.6.6.2 1.2.1 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2s-.2-.2-.4-.3z"/></svg>
        </a>
      </div>
    </div>
  </div>`;
}

function lgRenderProducts(containerId, brand, list, bc) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = list.map((p) => lgProductCard(brand, p, bc)).join("");
  if (window.__lgObserveReveal) window.__lgObserveReveal();
}
