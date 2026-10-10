"""Original flat illustrations for derrylanehomes.com. Not builder renderings."""

from PIL import Image, ImageDraw, ImageFilter
import random

DEEP = (40, 56, 44)
GREEN = (63, 87, 68)
LEAF = (86, 112, 90)
CLAY = (176, 96, 58)
CLAY_MID = (150, 82, 52)
CLAY_DARK = (124, 68, 46)
CREAM = (244, 236, 220)
STONE = (226, 216, 196)
ROAD = (154, 146, 132)
WINDOW = (246, 241, 230)


def sky(size):
    image = Image.new("RGB", size, CREAM)
    draw = ImageDraw.Draw(image)
    width, height = size
    for y in range(height):
        t = y / height
        colour = (
            int(214 + (236 - 214) * t),
            int(224 + (228 - 224) * t),
            int(214 + (210 - 214) * t),
        )
        draw.line([(0, y), (width, y)], fill=colour)
    return image


def tree(draw, x, y, scale=1.0, colour=GREEN):
    r = 54 * scale
    draw.rectangle([x - 7 * scale, y - 20 * scale, x + 7 * scale, y + 78 * scale], fill=(62, 48, 38))
    draw.ellipse([x - r, y - r * 1.15, x + r * 0.85, y + r * 0.45], fill=colour)
    draw.ellipse([x - r * 0.55, y - r * 1.45, x + r * 0.7, y - r * 0.15], fill=LEAF)


def facade(draw, x, y, w, h, brick):
    draw.rectangle([x, y, x + w, y + h], fill=brick)
    draw.polygon([(x - 6, y + 18), (x + w / 2, y - 36), (x + w + 6, y + 18)], fill=DEEP)
    floors = 3
    for floor in range(floors):
        wy = y + 36 + floor * ((h - 90) / floors)
        for col in range(2):
            wx = x + 22 + col * (w * 0.42)
            draw.rectangle([wx, wy, wx + 26, wy + 36], fill=WINDOW)
            draw.line([(wx + 13, wy), (wx + 13, wy + 36)], fill=DEEP, width=2)
            draw.line([(wx, wy + 18), (wx + 26, wy + 18)], fill=DEEP, width=2)
    draw.rectangle([x + w / 2 - 16, y + h - 52, x + w / 2 + 16, y + h], fill=DEEP)


def streetscape():
    image = sky((1600, 900))
    draw = ImageDraw.Draw(image)
    draw.rectangle([0, 610, 1600, 900], fill=(206, 198, 180))
    draw.rectangle([0, 700, 1600, 900], fill=ROAD)
    draw.rectangle([0, 668, 1600, 704], fill=STONE)
    random.seed(4)
    bricks = [CLAY, CLAY_MID, CLAY_DARK, CLAY, (164, 108, 74), CLAY_MID, CLAY_DARK, CLAY]
    x = 40
    for brick in bricks:
        w = 188
        facade(draw, x, 300, w, 368, brick)
        x += w - 1
    for tx in (30, 220, 470, 760, 1040, 1320, 1540):
        tree(draw, tx, 560, 1.05 if tx % 200 else 1.25)
    return image.filter(ImageFilter.SMOOTH_MORE)


def rear_lane():
    image = sky((1200, 800))
    draw = ImageDraw.Draw(image)
    draw.rectangle([0, 520, 1200, 800], fill=(196, 188, 170))
    draw.rectangle([70, 590, 1130, 760], fill=(132, 126, 112))
    x = 90
    for index in range(5):
        facade(draw, x, 250, 180, 300, CLAY if index % 2 == 0 else CLAY_DARK)
        draw.rectangle([x + 36, 575, x + 144, 700], fill=DEEP)
        draw.rectangle([x + 58, 598, x + 122, 688], fill=(214, 210, 200))
        x += 200
    tree(draw, 50, 500, 1.2)
    tree(draw, 1140, 500, 1.1)
    return image.filter(ImageFilter.SMOOTH_MORE)


def street_towns():
    image = sky((1200, 800))
    draw = ImageDraw.Draw(image)
    draw.rectangle([0, 560, 1200, 800], fill=STONE)
    draw.rectangle([0, 650, 1200, 800], fill=ROAD)
    for index, x in enumerate(range(70, 1080, 210)):
        facade(draw, x, 240, 200, 320, CLAY if index % 2 == 0 else CLAY_MID)
        tree(draw, x - 10, 500, 0.85)
    return image.filter(ImageFilter.SMOOTH_MORE)


def back_to_back():
    image = sky((1200, 800))
    draw = ImageDraw.Draw(image)
    draw.rectangle([0, 560, 1200, 800], fill=(206, 198, 180))
    for x, brick_a, brick_b in ((160, CLAY, CLAY_DARK), (640, CLAY_MID, CLAY)):
        facade(draw, x, 230, 190, 330, brick_a)
        facade(draw, x + 188, 230, 190, 330, brick_b)
        draw.rectangle([x + 170, 280, x + 208, 560], fill=DEEP)
    tree(draw, 70, 500, 1.2)
    tree(draw, 1100, 500, 1.15)
    return image.filter(ImageFilter.SMOOTH_MORE)


def heritage():
    image = sky((1200, 800))
    draw = ImageDraw.Draw(image)
    draw.rectangle([0, 560, 1200, 800], fill=(186, 176, 152))
    draw.polygon([(390, 430), (600, 250), (810, 430)], fill=DEEP)
    draw.rectangle([430, 420, 770, 700], fill=CREAM)
    draw.rectangle([560, 560, 640, 700], fill=DEEP)
    for wx in (470, 680):
        draw.rectangle([wx, 480, wx + 54, 580], fill=(150, 168, 156))
        draw.line([(wx + 27, 480), (wx + 27, 580)], fill=DEEP, width=2)
    tree(draw, 160, 500, 1.35)
    tree(draw, 1020, 500, 1.2)
    draw.rectangle([0, 700, 1200, 800], fill=ROAD)
    return image.filter(ImageFilter.SMOOTH_MORE)


def conservation():
    image = sky((1200, 800))
    draw = ImageDraw.Draw(image)
    draw.polygon([(0, 360), (1200, 300), (1200, 800), (0, 800)], fill=(78, 104, 78))
    draw.polygon(
        [(0, 520), (180, 470), (420, 540), (700, 450), (980, 530), (1200, 470), (1200, 800), (0, 800)],
        fill=(70, 122, 128),
    )
    draw.polygon(
        [(0, 600), (240, 540), (520, 620), (860, 540), (1200, 610), (1200, 800), (0, 800)],
        fill=(96, 146, 150),
    )
    for tx, scale in ((80, 1.5), (230, 1.15), (620, 0.9), (900, 1.4), (1100, 1.05)):
        tree(draw, tx, 340, scale)
    return image.filter(ImageFilter.SMOOTH_MORE)


if __name__ == "__main__":
    streetscape().save("public/images/derry-lane-towns-streetscape.jpg", quality=88, optimize=True)
    rear_lane().save("public/images/derry-lane-rear-lane.jpg", quality=88, optimize=True)
    street_towns().save("public/images/derry-lane-street-towns.jpg", quality=88, optimize=True)
    back_to_back().save("public/images/derry-lane-back-to-back.jpg", quality=88, optimize=True)
    heritage().save("public/images/meadowvale-heritage.jpg", quality=88, optimize=True)
    conservation().save("public/images/meadowvale-conservation.jpg", quality=88, optimize=True)
