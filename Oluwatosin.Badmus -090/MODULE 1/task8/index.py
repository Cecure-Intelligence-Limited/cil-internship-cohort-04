from PIL import Image 

pic = Image.open("/Users/tosinbadmus/Downloads/me.png")
print(pic.size())
pic_r = pic.resize((200, 400))

pic_r.show()


def copyResize(pic, w, h):
    copy = Image.open('pic')
    resize = ((w, h))
    save = resize.save()
    show = resize.show()
    return show()


copyResize('pic', 2500, 600)
