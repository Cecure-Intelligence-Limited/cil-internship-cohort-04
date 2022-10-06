# Python Task

Simple python function to copy and resize a jpg file.

## Function definition

```python
import os
from PIL import Image

def resizeImage(imgSrc, **kwargs):
    width = kwargs['width'] # set image width
    height = kwargs['height'] # set image height
    # get image file name without extension
    fileName = os.path.splitext(imgSrc)[0] 
    # append the width and height to the resized copy
    imgCopy = fileName + '_' + str(width) + 'x' + str(height) + '.jpg' 
    img = Image.open(imgSrc) # get the image
    resizeImg = img.resize((width, height)) # resize image
    resizeImg.save(imgCopy) # save image
```

## Function Call / Usage

The function accepts 3 arguments: 1 positional, and 2 keyword arguments*.

The first argument must be the file path of the image, while the other two are the width and height of the new image copy

```python
resizeImage('C:\\Users\\CK\\Pictures\\Camera Roll\\DSC00474.jpg', width=350, height=250);
```

*Note that the keyword arguments can be defined in any other.

