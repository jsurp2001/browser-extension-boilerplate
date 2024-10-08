Carbon14

Website: Carbon14 GitHub Repository
Brief Description

Carbon14 is an OSINT (Open Source Intelligence) tool designed to estimate the creation or modification date of web content by analyzing embedded images. It helps investigators verify when content, such as blog posts or news articles, was likely written or altered. Carbon14 does this by inspecting the Last-Modified HTTP headers of images, revealing the timestamps when the images were uploaded, which often aligns with the article’s creation date. This tool is useful in digital forensics and OSINT, especially when publication dates on a website can be easily manipulated.

Installation Commands

Linux:
Install:
bash
Copy code
git clone https://github.com/Lazza/Carbon14  
cd Carbon14  
sudo python3 -m pip install -r requirements.txt  
Update:
bash
Copy code
git pull origin master
Remove:
bash
Copy code
sudo rm -rf Carbon14
Dependencies: Python 3.8+, requests, beautifulsoup4
macOS:
Install:
bash
Copy code
brew install python  
git clone https://github.com/Lazza/Carbon14  
cd Carbon14  
python3 -m pip install -r requirements.txt  
Update:
bash
Copy code
git pull origin master
Remove:
bash
Copy code
brew uninstall python
Dependencies: Python 3.8+, requests, beautifulsoup4
Windows:
Install:
Download and install Python 3.8.
Open Command Prompt and run:
bash
Copy code
git clone https://github.com/Lazza/Carbon14  
cd Carbon14  
python3 -m pip install -r requirements.txt  
Update:
bash
Copy code
git pull origin master
Remove:
bash
Copy code
rm -r Carbon14
Dependencies: Python 3.8+, requests, beautifulsoup4
Common Commands and Use Cases

Commands:
To get help:
bash
Copy code
python3 carbon14.py -h
To analyze a webpage:
bash
Copy code
python3 carbon14.py https://example.com
To include the author's name in the report:
bash
Copy code
python3 carbon14.py -a "Author Name" https://example.com
Use Cases:
Verifying the original publication date of blog posts, articles, or news stories.
Identifying changes to web content by tracking when images were modified or replaced.
Advanced Use Cases:
Integration with OSINT tools to automate the analysis of multiple web pages.
Use in digital forensics to confirm timelines of content publication without relying on CMS-provided dates.
Tips, Tricks, and Techniques

Use Carbon14 to cross-verify content on websites with archival data from services like the Wayback Machine.
Analyze social media images (e.g., from Instagram or Twitter) to obtain high-resolution versions and exact publication times​(
GitHub
)​(
Nixintel OSINT
).
Performance Optimization

Use a fast internet connection as Carbon14 depends on HTTP requests to retrieve images and metadata.
Filter irrelevant URLs before running Carbon14 on large or content-heavy sites to avoid unnecessary HTTP calls.
Privacy Concerns

Data Storage: Carbon14 does not store any user data. It only reads public-facing HTTP headers and does not interact with website databases.
Security

Vulnerabilities: As a Python-based tool, it inherits vulnerabilities of Python if not properly updated. Make sure to regularly update Python and dependencies.
Best Practices: Use Carbon14 on trusted networks and with legitimate content to avoid legal issues, especially when analyzing sensitive websites.
License and Contribution

License: GPL-3.0
Contribution: Contributions are welcome on GitHub. Fork the repository, make changes, and submit pull requests via the Carbon14 GitHub.
Documentation

Official Documentation: GitHub Carbon14 ReadMe
Community Documentation: Various guides on blogs like Nixintel​(
Nixintel OSINT
).
Free Learning Resources

Free Articles:
Verifying The Age of A Website with Carbon14​(
Nixintel OSINT
)
Free YouTube Tutorials:
There are currently no dedicated video tutorials for Carbon14, but general Python OSINT tool usage tutorials might cover it.
Version History and Updates

Latest Version: The tool is regularly updated on GitHub. As of the latest commit, no major releases have been tagged​(
GitHub
).
Known Bugs and Issues

Known Issues: Some web servers may not provide valid Last-Modified headers, affecting the accuracy of the tool.
Workaround: Test multiple URLs and cross-reference with other data sources for a more comprehensive analysis​(
Nixintel OSINT
).
Third-Party Integrations

Carbon14 can be integrated with other Python-based OSINT tools for automated investigations.
Comparable Software

ExifTool: Focuses on extracting metadata from files, including images.
Wayback Machine: A web archiving tool that can help verify the historical state of a webpage, but lacks Carbon14’s granularity.
User Base & Popularity

With over 100 stars on GitHub, Carbon14 is used by digital investigators, journalists, and OSINT professionals​(
GitHub
).
OSINT Compatibility

OSINT Usage: Carbon14 is specifically designed for OSINT tasks, such as verifying webpage dates and uncovering modifications over time​(
Nixintel OSINT
).
Linux Compatibility

Compatibility: Fully compatible with Linux.