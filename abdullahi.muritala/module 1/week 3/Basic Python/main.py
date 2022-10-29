from PIL import Image

img_path = input('Enter the path to your image file: ');
 
img = Image.open(img_path)
 

width, height = img.size
 
left = 4
top = height / 5
right = 154
bottom = 3 * height / 5
 
img1 = img.crop((left, top, right, bottom))
newsize = (300, 300)
im1 = img1.resize(newsize)
img1.show()
