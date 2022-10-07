#from turtle import width
from PIL import Image

def resizePicture(width,height):
    #open the image which could be jpeg or png
    img = Image.open("girl.png")
    # WIDTH and HEIGHT are integers
    width = int(input("Enter the width:\n"))
    height = int(input("Enter the height:\n"))
    resized_pic = img.resize((width,height ))
    resized_pic.save("resized_picture.jpg") #save in either png or jpeg.
    resized_pic.save("resized_picture.png")
    print("Your picture has been resized")
resizePicture(1200,1500)