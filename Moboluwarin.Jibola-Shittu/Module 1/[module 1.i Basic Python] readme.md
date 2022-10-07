"""
YOU CAN ALSO SEE THIS SCRIPT HOSTED AT
[https://github.com/jibolashittubolu/cil_basic_js](https://github.com/jibolashittubolu/cil_python_resizer)

PREREQUISITES:
_______
This program includes PIL(pillow) as a dependency
install PIL from pip or the below pip command,  globally or preferably create a Python virtual environment before running pip install PIL

pip install PIL


INITIAL LOAD:
__________
Run the script.
On running the script the very first time, the script will autogenerate an src folder if it does not already exist.
Furthermore the script will also automatically create 2 subfolders inside the generated src subfolder folder from above.

src -->
	-->IMG_RESIZE_input_folder(put all input files here)
	-->IMG_RESIZE_output_folder(put all output files here)

Place the images you want to resize into the IMG_RESIZE_input_folder(put all input files here) folder.
Then rerun the script.
Your output files can be found in the IMG_RESIZE_output_folder(put all output files here) folder.



USAGE
---------------------------
This script allows users to resize multiple images in large batches.
The function 'resize_bulk_images' accepts 6 optional parameters

The parameters are listed below and their priority levels attached.
A lower numeric priority level means that it would overwrite any conflicting parameters that possess a higher numeric priority level

Note that all parameters are optional and have a degree of precedence over another.

e.g resize_bulk_images(
        width=360,
        height=240,
        scaleType='reduce',
        factor=3,
        maintainAspectRatio=True
        forceImgFormat='JPEG',
    )

1.
width
takes an integer value
defaults to original width of the image in pixels if not specified
e.g resize_bulk_images(width=320)
Priority level: 1

2.
height: 
takes an integer value
defaults to original height of the image if not specified
e.g resize_bulk_images(width=320)
Priority level: 1

3.
maintainAspectRatio
takes a Boolean value either True or False
defaults to False if not specified
effect is seen when only width or only height is specified
i.e use when you specify only height or width
only specify either of height or width and other parameters if effect is wanted
priority level: 2

4.
scaleType:
takes a string value of either 'enlarge' or 'reduce'
should be used alongside the factor parameter lest the output image returns the original size
e.g  scaleType='enlarge', factor='1.5' will increase both height and width of output image by the provided factor, 1.5
Priority level: 3

5.
factor:
takes a float/int/numeric value
use factor only whenever you specify a scaleType lest it has no effect.

6.
forceImgFormat:
takes a string of image format to specify.
defaults to "PNG"
e.g forceImgFormat = "JPEG"
Priority level: none


"""

from subprocess import CREATE_NEW_CONSOLE
from PIL import Image
import os, sys
import time

from pip import main

#forceImgFormat, input folder, outputfoler

def getMsTime():
    obj = time.gmtime(0)
    epoch = time.asctime(obj)
    curr_time_in_ms = round(time.time()*1000)
    return str(curr_time_in_ms)

def resize_bulk_images(
        width='', 
        height='',
        maintainAspectRatio = False,
        scaleType = '',
        factor = 1,
        forceImgFormat=False, 
    ):
    number_of_images_resized = 0
    
    # img_dir = "C:/Users/MB/Desktop/WORK/CIL/SOLUTION/module 1.9 basic python/ResizeApp/src/input/"

    #dirs list the files and directories inside the parameter passed to os.listdir(parameter)
    # print(dirs)
    # print(output_path)
    cwd = os.getcwd()
    #cwd is the current directory where the script is being executed
    # print(cwd)
    try:
        src_di = 'src'
        src_path = os.path.join(cwd, src_di)
        os.mkdir(src_path)
        pass
    except:
        pass
    cwd = cwd + '\\src\\'
    #add an src to cwd
    input_dir = 'IMG_RESIZE_input_folder(put all input files here)'
    output_dir = 'IMG_RESIZE_output_folder(access all output files here)'
    input_path = os.path.join(cwd, input_dir)
    output_path = os.path.join(cwd, output_dir)

    src_dir = os.listdir(cwd)
    if (input_dir in src_dir and output_dir in src_dir):
        print('Discovered')
    else:
        try:
            os.mkdir(input_path)
            pass
        except:
            pass
        try:
            os.mkdir(output_path)
            pass
        except:
            pass
    img_dir = input_path + '\\'
    dirs = os.listdir( img_dir )

    for img in dirs:
        if os.path.isfile(img_dir  + img):
        #confirms if the directory item is a file and not a directory itself
        #img_dir + image appends the parent directory to the sub file or subdirectory name 
            try:
                im = Image.open(img_dir + img)
                imFormat = im.format
                if(forceImgFormat):
                    imFormat =  forceImgFormat
                    if im.mode != 'RGB':
                        im = im.convert('RGB')
                # im.show()
                f, e = os.path.splitext(img_dir + img)
                # print(f)
                slash_type_1 = '/'
                slash_type_2 = '\\'
                file_name = f
                if ( slash_type_2 in file_name ):
                    file_name = f.split(slash_type_2)[-1]
                if (slash_type_1 in file_name):
                    file_name = f.split(slash_type_1)[-1]
                # print('file name, ', file_name)
                #gets the file name from the full path excluding its format
                # print(output_path)
                #half the size
                #half the size
                wid = int(im.size[0]/2)
                hei = int(im.size[1]/2)
                aspectRatio = hei/wid
                if (scaleType):
                    if(scaleType == 'enlarge'):
                        wid = int(im.size[0] * factor)
                        hei = int(im.size[1] * factor)
                    if(scaleType == 'reduce'): 
                        wid = int(im.size[0] / factor)
                        hei = int(im.size[1] / factor)
                if (maintainAspectRatio):
                    if (width):
                        hei = int(width * aspectRatio)
                        pass
                    elif(height):
                        wid = int(height * (1/aspectRatio))
                        pass
                    # if (widt)
                if(width):
                    wid = width
                if(height):
                    hei = height
                new_output_path = (output_path + '\\' + file_name + '_' + getMsTime() + '_' + str(wid) + 'x' + str(hei) +  '_resized' + '.' + imFormat) 
                # print(new_output_path)
                imResize = im.resize( ( wid, hei  ), Image.Resampling.LANCZOS)
                number_of_images_resized += 1
                # print(number_of_images_resized)
                imResize.save(new_output_path , imFormat, quality=90)
                # print(img)

            except:
                pass
    print(number_of_images_resized, ' image(s) were resized. Bye!')

print('Bulk images resizing started...')
resize_bulk_images(
        forceImgFormat='JPEG',
        # width=360,
        # height=240,
        scaleType='reduce',
        factor=3,
        # maintainAspectRatio=True
    )
print('Bulk images resizing finished...')
 







 