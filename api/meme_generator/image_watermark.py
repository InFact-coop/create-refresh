from PIL import Image


def add_watermark(input_path, output="watermarked"):
    """Add EU-compliant meme watermark to a supplied image"""
    try:
        original_image = Image.open(input_path)
        _original_width, original_height = original_image.size

        watermark_image = Image.open("eu-compliant-watermark.png")
        watermark_width, watermark_height = watermark_image.size
        watermark_resized = watermark_image.resize(
            (watermark_width/2, watermark_height/2))
        _w_width, w_height = watermark_resized.size

        original_image.paste(watermark_resized, (8, original_height - w_height - 8),
                             mask=watermark_resized)

        original_image.save(output + ".jpg")
        return "Success!"
    except IOError:
        return "Failure!"
