## What is Python used for in programming?
Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language, meaning it can be used to create a variety of different programs and isn't specialized for any specific problems
Many applications use digital images, and with this, there is usually a need to process the images used. If you are building your application with Python and need to add image processing features to it, there are various libraries you could use. Some popular ones are OpenCV, scikit-image, Python Imaging Library and Pillow.
Resizing images is an integral part of the web, whether to display images on your website or app, store lower-resolution images, or generate a training set for neural networks.
Python offers a rich set of options to perform some of the routine image resizing tasks.

## Resizing Images using Pillow
Pillow is one of the most popular options for performing basic image manipulation tasks such as cropping, resizing, or adding watermarks.

# Install the latest version of Pillow with pip.
```python
Python3 -m pip install Pillow
```

Pillow provides the resize() method, which takes a (width, height) tuple as an argument.
# from PIL import Image
```python
image = Image.open('sunset.jpg')
print(f"Original size : {image.size}") # 5464x3640
sunset_resized = image.resize((400, 400))
sunset_resized.save('sunset_400.jpeg')
```

We read our image using the open() method from the Image module. Then we use resize with a tuple, representing the width and height of the output image, respectively, as an argument containing the new size.

# Maintain Aspect Ratio while Resizing
The resize method is pretty handy and quick to work with, but it doesn't always give the best results. Images resized using this method may be stretched or forced to fit in a box and therefore skewed.
ImageKit makes it ridiculously easy to resize images while maintaining  the aspect ratio.
Although the thumbnail() method can address the problem of skewing, it creates a thumbnail version of the image whose size does not exceed the dimensions specified in the arguments.

```python
image.thumbnail((400, 400))image.save("sunset-aspect.jpeg")
```

The thumbnail method resizes the image in place without returning an image object. Therefore, make sure to save the file with a different name.


# 2) Resizing Images using OpenCV
OpenCV is the de-facto library used to perform complex image processing tasks such as face detection, pixel transformations, and 3D modeling. But, it can perform more generic tasks like image resizing as well.

# First, let's install the latest opencv for Python using pip.
```python
Python3 -m pip install opencv-Python
```

# Resizing with OpenCV
Although OpenCV is a viable choice for image resizing, it is best suited for heavy-duty tasks like object detection.

# Resizing images can be done by cv2.resize() method.
```python
import cv2
img = cv2.imread('sunset.jpg')
#Get original height and width
print(f"Original Dimensions : {img.shape}")
#resize image by specifying custom width and height
resized = cv2.resize(img, (2000, 1500))
print(f"Resized Dimensions : {resized.shape}")
cv2.imwrite('resized_imaged.jpg', resized)
```

# ropping an image with OpenCV
OpenCV uses a NumPy array under the hood for representing images. We can leverage array slicing to extract the part of the pixels we need, i.e., crop the image.
Since this is a 2D array, we need to specify the start and end coordinates, just like we did while cropping images with Pillow. Though, the syntax here is slightly different.
If we want to crop an image starting at (0,0) point to (2732, 3640) point, 

```python
#image[startY:endY, startX:endX]
cropped_image = img[0:3640, 0:2732]
cv2.imwrite('cropped-image-opencv.jpg', cropped_image)
print(f"Cropped Image Dimensions : {cropped_image.shape}") # 2732x3640
```


# 3) Simplify all of it by using ImageKit, a complete image optimization product
Both Pillow and OpenCV are good options to resize and crop images. But these solutions require extensive setup and maintenance in line with the changing business needs.
This might not be the best utilization of your or your team's time when tools like ImageKit.io can do the same job for you with minimal effort.
ImageKit.io is a real-time image and video optimization, manipulation, and storage product that can help you do basic resizing and cropping on your images and more.
You have the flexibility to either upload your images to the integrated media library or attach your existing cloud storage or servers to ImageKit and start delivering optimized files. Several image and video optimizations are done automatically, considering multiple factors, whereas resizing, cropping, and other transformations can be done by simply modifying the URL in real-time.

Setup with ImageKit
https://ik.imagekit.io/ikmedia/python-resizing/sunset_SLoRHsWVo.jpg
```python
Python3 -m pip install imagekitio Python-dotenv
```

# Basic resizing by changing height and width
Resizing images in ImageKit is simple. Just add the required dimension transformation to the URL, and you will get the resized image in real-time.
For example, to get the sample image with a width of 200px, the URL will be -
https://ik.imagekit.io/ikmedia/python-resizing/sunset_SLoRHsWVo.jpg?tr=w-200



# “copy and resize image python”
```python
python pil resize image
1 from PIL import Image
2 # Image.open() can also open other image types
3 img = Image.open("some_random_image.jpg")
4 # WIDTH and HEIGHT are integers
5 resized_img = img.resize((WIDTH, HEIGHT))
6 resized_img.save("resized_image.jpg")
```

# Now let’s understand the code above line by line:
1) We set a base width which we would like the image to be.
2) Then we open the image with Image.open(‘image_name.jpg’)
3) We calculate the aspect ratio for width by doing: base_width / the images existing width.
4) This provides us with a ratio number that we can times by the height to get the correct height for producing our base_width.
5) Then we resize the image based on the two values (base_width and hsize).
6) The image is then saved with image.save(‘image_name.jpg’).

# pil resize image
```python
1 im = Image.open('image.jpg')  
2 im = im.resize((w, h)) 
```