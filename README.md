# windelicato.com

here lies the code for my personal website. the source lives in `master` and the compiled site lives in `gh-pages`

## building
requires `ruby` and `bower`
```
git clone git@github.com:windelicato/homepage
cd homepage
bower install
gem install bundler
bundle install
```

and then run `bundle exec jekyll serve` and navigate to `http://localhost:4000`
