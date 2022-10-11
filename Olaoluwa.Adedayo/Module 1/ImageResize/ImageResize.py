import cv2

def image_copy_resize():
    # read image and print original dimensions
    img = cv2.imread('ImageResize\jacek-dylag-fZglO1JkwoM-unsplash.jpg', )
    print('Original Dimensions : ',img.shape)
   
    # copy image and print copy dimensions
    image_Copy = img.copy()
    print('Copy Dimensions : ',image_Copy.shape)
   
    # image resize parameters
    scale_percent = 60 # percent of original size
    width = int(img.shape[1] * scale_percent / 100)
    height = int(img.shape[0] * scale_percent / 100)
    dim = (width, height)
  
    # resize image
    resized = cv2.resize(img, dim, interpolation = cv2.INTER_AREA)
    print('Resized Dimensions : ',resized.shape)

    cv2.imshow('image copy', image_Copy)
    cv2.imshow("Resized image", resized)

 
image_copy_resize()
 
cv2.waitKey(0)
cv2.destroyAllWindows()