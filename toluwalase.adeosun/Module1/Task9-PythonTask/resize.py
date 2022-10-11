print("hello world")# import module (with an alias if you wish)
from PIL import Image as img

#  save the picture file path into a variable
my_pic = "C:\Users\USER\Desktop\cil-internship-cohort-04\toluwalase.adeosun\PythonTask\max2.jpg" 

# define your function with two arguments
def resize(my_pic, size):
#     copy the image
    img_copy = img.open(my_pic)
#     resize the image
    img_size = img_copy.resize(size)
#     show the image with its new size
    return img_size.show()



# call the function with the right arguments
resize(my_pic, (10,30))