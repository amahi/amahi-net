
all:
	jekyll --pygments --safe
	@echo "Now: open _site/index.html"

publish: all
	rsync -av _site/ site.amahi.net:amahi.net-main/html/


