from PIL import Image
import glob
import os

1st_images = [i for i in glob.glob("*.png")]

# It creates a folder called new if doesn't exist
if not "new" in os.listdir():
    os.mkdir("new")

print(1st_imgs)
for i in 1st_imgs:
    img = Image.open(i)
    img = img.resize((128, 128), Image.pictures)
    img.save("new//" + i[:-4] + "_new.png")


print("Done")
os.startfile("new")

