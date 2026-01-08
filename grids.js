const GRID_TEMPLATES = {
  thirds: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="100%">
            <line x1="33.3" y1="0" x2="33.3" y2="100" stroke="currentColor" stroke-width="0.2"/>
            <line x1="66.6" y1="0" x2="66.6" y2="100" stroke="currentColor" stroke-width="0.2"/>
            <line x1="0" y1="33.3" x2="100" y2="33.3" stroke="currentColor" stroke-width="0.2"/>
            <line x1="0" y1="66.6" x2="100" y2="66.6" stroke="currentColor" stroke-width="0.2"/>
        </svg>`,
  golden: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="100%">
            <line x1="38.2" y1="0" x2="38.2" y2="100" stroke="currentColor" stroke-width="0.2"/>
            <line x1="61.8" y1="0" x2="61.8" y2="100" stroke="currentColor" stroke-width="0.2"/>
            <line x1="0" y1="38.2" x2="100" y2="38.2" stroke="currentColor" stroke-width="0.2"/>
            <line x1="0" y1="61.8" x2="100" y2="61.8" stroke="currentColor" stroke-width="0.2"/>
        </svg>`,
  crosshair: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="100%">
            <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" stroke-width="0.2"/>
            <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" stroke-width="0.2"/>
        </svg>`,
  crosshairX: `<svg xmlns="http://www.w3.org/2000/svg" 
     viewBox="0 0 100 100" 
     preserveAspectRatio="none" 
     style="width:100%; height:100%; position:absolute; top:0; left:0;">
     
    <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" stroke-width="0.2" />
    
    <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" stroke-width="0.2" />
</svg>`,
  spiral: `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 161.8 100" preserveAspectRatio="xMidYMid meet" width="100%" height="100%">

      <path d="M 0,100 A 100,100 0 0,1 100,0" stroke-width="0.1" fill="none" stroke="currentColor" />
      <path d="M 100,0 A 61.8,61.8 0 0,1 161.8,61.8" stroke-width="0.1" fill="none" stroke="currentColor" />
      <path d="M 161.8,61.8 A 38.2,38.2 0 0,1 123.6,100" stroke-width="0.1" fill="none" stroke="currentColor" />
      <path d="M 123.6,100 A 23.6,23.6 0 0,1 100,76.4" stroke-width="0.1" fill="none" stroke="currentColor" />
      <path d="M 100,76.4 A 14.6,14.6 0 0,1 114.6,61.8" stroke-width="0.1" fill="none" stroke="currentColor" />
      <path d="M 114.6,61.8 A 9,9 0 0,1 123.6,70.8" stroke-width="0.1" fill="none" stroke="currentColor" />
      <path d="M 123.6,70.8 A 5.6,5.6 0 0,1 118,76.4" stroke-width="0.1" fill="none" stroke="currentColor" />

        <rect x="0" y="0" width="100" height="100" fill="none" stroke="currentColor" stroke-width="0.1" />
      <rect x="100" y="0" width="61.8" height="61.8" fill="none" stroke="currentColor" stroke-width="0.1" />
      <rect x="123.6" y="61.8" width="38.2" height="38.2" fill="none" stroke="currentColor" stroke-width="0.1" />
      <rect x="100" y="76.4" width="23.6" height="23.6" fill="none" stroke="currentColor" stroke-width="0.1" />
      <rect x="100" y="61.8" width="14.6" height="14.6" fill="none" stroke="currentColor" stroke-width="0.1" />
      <rect x="114.6" y="61.8" width="9" height="9" fill="none" stroke="currentColor" stroke-width="0.1" />
      <rect x="118" y="70.8" width="5.6" height="5.6" fill="none" stroke="currentColor" stroke-width="0.1" />

      <rect x="0" y="0" width="161.8" height="100" fill="none" stroke="currentColor" stroke-width="0.2" />
  </svg>`,
};
