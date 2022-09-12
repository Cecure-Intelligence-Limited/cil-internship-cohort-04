## How to use the function

  def Image_Resizer(File_path,Image_name,Base_width,Base_height,Resized_Image_name):

      # Then we open the image with 

      im = Image.open(os.path.join(File_path,Image_name))

      im.show()

      # we resize the image based on the width and height provided

      im = im.resize((Base_width,Base_height),Image.ANTIALIAS)

      # The image is then saved

      im.save(os.path.join(File_path,Resized_Image_name)+'.jpeg') 


File_path = This is the path to the image you want to resize

Image_name = This is the name of the image

Base_width = The new width to which you want to transform the image

Base_height = The new height to which you want to transform the image

Resized_Image_name = New Image name

### For Example 

Image_Resizer("/Users/User/Desktop","Ball",40,40,"Resized_Ball")

File_path = "/Users/User/Desktop"

Image_name = "Ball"

Base_width = 40

Base_height = 40

Resized_Image_name = "Resized_Ball"
