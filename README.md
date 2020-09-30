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

# Contributing
*To help us improve the site:*

1.Fork it

2.Create your feature branch (git checkout -b my-new-feature)

3.Commit your changes (git commit -am 'Add some feature')

4.Push to the branch (git push origin my-new-feature)

5.Create new Pull Request
