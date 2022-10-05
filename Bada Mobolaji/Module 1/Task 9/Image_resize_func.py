from PIL import Image
import glob,os

def Image_Resizer(File_path,Image_name,Base_width,Base_height,Resized_Image_name):
    # Then we open the image with 
    im = Image.open(os.path.join(File_path,Image_name))
    im.show()
    # we resize the image based on the width and height provided
    im = im.resize((Base_width,Base_height),Image.ANTIALIAS)
    # The image is then saved
    im.save(os.path.join(File_path,Resized_Image_name)+'.jpeg') 
    
