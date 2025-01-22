import turtle

t = turtle.Turtle()
t.shape("turtle")

while True:
  cmd = input(">>>")
  if cmd[:8] == "Forward ":
    try:
      t.forward(int(cmd[8:]))
    except:
      print("Invalid data",cmd[8:])
  elif cmd[:9] == "Backward ":
    try:
      t.forward(int(cmd[9:]))
    except:
      print("Invalid data",cmd[9:])
