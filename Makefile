
all:
	bundle exec jekyll build --safe
	@echo "Now: open _site/index.html"

publish: all
	rsync --delete -av _site/ amahi.net:amahi.net-main/html/

