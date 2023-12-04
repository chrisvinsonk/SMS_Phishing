# Define phone number and link
phone_number = "+917483188218"
link = "C:/Users/chris/Documents/Projects/Internship_phishing/Front/index.html"

# Build message with link
message = f"Hi! Click this link to fill out a form: {link}"
message = "Hello there, welcome to our forum! We would now require you to fill out the following linked form to access more features of our premium forum. These feautes are now available for free for a limited time!!!"
# Print simulated SMS
print(f"Sending SMS to {phone_number}:")
print(message)
print("https://tinyurl.com/featureform/")

# Prompt user to open HTML file
open_file = input("Would you like to open the form now to avail the offer? (y/n): ")

if open_file.lower() == "y":
    try:
        import webbrowser
        webbrowser.open_new(link)
    except Exception as e:
        print(f"Error opening link: {e}")
else:
    print("Okay, no problem!")

