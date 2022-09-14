import cv2

## size_change is to take a floating point number
def resize_image(image, size_change):
    image = cv2.imread(image)
    image2 = image.copy()

    width = int(image2.shape[1] * size_change)
    height = int(image2.shape[0] * size_change)
    dim = (width, height)

    resized_image = cv2.resize(image2, dim, interpolation=cv2.INTER_AREA)
    return resized_image
