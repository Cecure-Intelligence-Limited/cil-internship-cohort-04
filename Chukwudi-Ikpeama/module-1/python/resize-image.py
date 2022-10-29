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

# Call function
resizeImage('DSC00474.jpg', width=350, height=250)


