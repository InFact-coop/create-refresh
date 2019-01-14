import os
from PIL import Image


class HandleImage(object):
    def __init__(self, path, resize_size=1080):
        self.path = path
        self.original = Image.open(path)
        self.original_x = self.original.size[0]
        self.original_y = self.original.size[1]
        self.smallest_axis = self.calculate_smallest_axis(
            x=self.original_x, y=self.original_y)
        self.resize_size = resize_size
        self.scale = self.calculate_scale()
        self.resized = self.resize()
        self.resized_x = self.resized.size[0]
        self.resized_y = self.resized.size[1]
        self.crop_pixels = self.calculate_crop()
        self.crop_image = self.crop()

    def calculate_smallest_axis(self, x, y):
        return "X" if x < y else "Y"

    def calculate_scale(self):
        scale_divisor = self.original_x if self.smallest_axis == "X" else self.original_y
        return float(self.resize_size) / scale_divisor

    def resize(self):
        dimensions = int(self.original_x *
                         self.scale), int(self.original_y * self.scale)
        return self.original.resize(dimensions)

    def calculate_crop(self):
        oversize = self.resized_x - \
            self.resized_y if self.smallest_axis == "Y" else self.resized_y - self.resized_x
        return oversize / 2

    def crop_x_smallest_axis(self):
        left = 0
        upper = self.crop_pixels
        right = self.resized_x
        lower = self.resized_y - self.crop_pixels
        return (left, upper, right, lower)

    def crop_y_smallest_axis(self):
        left = self.crop_pixels
        upper = 0
        right = self.resized_x - self.crop_pixels
        lower = self.resized_y
        return (left, upper, right, lower)

    def crop(self):
        box_coords = self.crop_x_smallest_axis(
        ) if self.smallest_axis == "X" else self.crop_y_smallest_axis()
        return self.resized.crop(box_coords)

    def get_cropped(self):
        return self.crop_image

    def save(self, path):
        self.crop_image.save(path)
