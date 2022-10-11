## Python code to resize images

import PIL
from PIL import Image
import os
import glob

path = "input img dir"

def resize():
image = Image.open(path)
resized_image = image.resize((new width, new height), Image.ANTIALIAS)
image.save('input save path.jpg')

resize()
