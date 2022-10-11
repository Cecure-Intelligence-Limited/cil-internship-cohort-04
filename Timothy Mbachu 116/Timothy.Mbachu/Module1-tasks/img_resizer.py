import cv2 

img_path = "assets/MAXe-series-1.jpeg"

def img_resizer(image):
    img = cv2.imread(image)
    print(img.shape)

    width = int(input("Enter desired width: "))
    height = int(input("Enter desired height: "))
    imgResize = cv2.resize(img, (width, height))
    print(imgResize.shape)

    cv2.imshow("original image", img)
    cv2.imshow("new image", imgResize)

img_resizer(img_path)