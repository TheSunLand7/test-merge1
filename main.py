from pprint import pprint as pp


def main(name, age):
    msg = f"Hi my name is {name} and I am {age} years old."
    return msg


pp(main("Benjamin", 37))
