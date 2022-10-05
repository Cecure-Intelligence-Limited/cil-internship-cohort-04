from PIL import Image

# Image.open() can also open other image types
img = Image.open('Edikan.Ekanem\Task9-BasicPython\picture.jpg')
img.show()

# Resize the image
resized_img = img.resize((500, 500))
resized_img.save('Edikan.Ekanem\\Task9-BasicPython\\resized.jpg')
resized_img.show()
