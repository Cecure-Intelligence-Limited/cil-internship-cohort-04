import PIL
from PIL import Image

def ImageCopy():
  # creating a image object
  image1 = Image.open('demo_image.jpg')

  # copying image to another image object
  image2 = image1.copy()
  image2.save('copied_image.jpg')
  # to show the copied image, uncomment the line below
  #image2.show()

ImageCopy()

def ImageResizer():
  fixed_height = 420
  image = Image.open('demo_image.jpg')
  print(image.size)

  height_percent = (fixed_height / float(image.size[1]))
  width_size = int((float(image.size[0]) * float(height_percent)))
  image = image.resize((width_size, fixed_height), PIL.Image.Resampling.NEAREST)
  image.save('resized_image.jpg')
  print(image.size)

ImageResizer()