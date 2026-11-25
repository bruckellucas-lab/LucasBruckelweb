"""
Genera las imágenes Open Graph (1200 × 630) en public/og/.
Uso:  pip install pillow fonttools brotli  &&  python3 scripts/og.py
Las vuelve a generar desde los textos de abajo; si sumás un proyecto, agregalo a PAGES.
"""
from pathlib import Path
from io import BytesIO
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
FONT = ROOT / 'public/fonts/archivo.woff2'
OUT = ROOT / 'public/og'
OUT.mkdir(parents=True, exist_ok=True)

def instance(wdth: float, wght: float, size: int) -> ImageFont.FreeTypeFont:
    f = TTFont(FONT)
    f.flavor = None
    inst = instantiateVariableFont(f, {'wdth': wdth, 'wght': wght})
    buf = BytesIO(); inst.save(buf); buf.seek(0)
    return ImageFont.truetype(buf, size)

PAGES = {
    'default': ('LUCAS\nBRUCKEL', 'Negocios y producto. LISTO, catálogos web y UniRide.', 'Business and product. LISTO, web catalogs and UniRide.'),
    'listo': ('LISTO', 'Contás tu plan y LISTO lo convierte en tres opciones reales.', 'Describe your plan and LISTO turns it into three real options.'),
    'catalogos': ('CATÁLOGOS\nWEB', 'Catálogos para comercios con consultas por WhatsApp.', 'Web catalogs for stores, with WhatsApp inquiries.'),
    'uniride': ('UNIRIDE', 'Carpooling para estudiantes universitarios del AMBA.', 'Carpooling for university students in Greater Buenos Aires.'),
}

def fit(text: str, max_w: int, max_h: int):
    size = 420
    while size > 60:
        font = instance(62, 900, size)
        d = ImageDraw.Draw(Image.new('L', (10, 10)))
        box = d.multiline_textbbox((0, 0), text, font=font, spacing=-int(size * 0.18))
        if box[2] - box[0] <= max_w and box[3] - box[1] <= max_h:
            return font, size
        size -= 10
    return instance(62, 900, size), size

small = instance(100, 500, 30)
mark = instance(70, 900, 26)
for slug, (title, line_es, line_en) in PAGES.items():
  for suffix, line in (('', line_es), ('-en', line_en)):
      img = Image.new('RGB', (1200, 630), 'white')
      d = ImageDraw.Draw(img)
      font, size = fit(title, 1100, 400)
      d.multiline_text((50, 40), title, font=font, fill='black', spacing=-int(size * 0.18))
      d.rectangle([50, 520, 1150, 522], fill='black')
      d.text((50, 545), line, font=small, fill='black')
      d.rectangle([1096, 540, 1150, 594], outline='black', width=3)
      d.text((1105, 551), 'LB', font=mark, fill='black')
      img.save(OUT / f'{slug}{suffix}.png', optimize=True)
      print('ok', slug, suffix)
