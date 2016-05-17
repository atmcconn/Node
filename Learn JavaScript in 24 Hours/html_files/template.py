import sys

filename = sys.argv[1]
fileObj = open(filename + '.html', 'w')

linesToWrite = ["<!DOCTYPE html>", "<html>", "<head>", "    <title></title>", "    <script>", "    </script>",
                "</head>", "<body>", "</body>", "</html>"]

for line in linesToWrite:
    fileObj.write(line + '\n')

fileObj.close()
