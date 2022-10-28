## Simple function to copy and resize a jpg file

```
from PIL import Image

def resize_image(image,width,height):
    """
     image is the image file path
     width is the new width of the image
     height is the new height of the imagw
    """
    img_file = Image.open(image)
    #resized image
    new_image = img_file.resize((width,height))

    #save or copy image
    new_image.save("new_image.jpg")


resize_image("about1.jpg",100,100)
```
