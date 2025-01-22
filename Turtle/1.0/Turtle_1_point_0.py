import turtle

t = turtle.Turtle()
t.shape("turtle")

while True:
  cmd = input(">>>")
  if cmd[:8] == "Forward ":
    try:
      t.forward(cmd[8:])
    except:
      print("Invalid data",cmd[8:])
