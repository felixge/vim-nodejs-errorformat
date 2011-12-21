# nodejs-errorformat

A simple vim plugin that allows to execute any opened node.js file with `:make`
and provides errorformat settings that allow you to quickly jump to any file /
line numbers referenced in a stack trace.

## Install

Get [pathogen][], then:

```
cd ~/.vim/bundle
git clone git://github.com/felixge/vim-nodejs-errorformat.git
```

## Usage

If you already know how `:make` and the quickfix window work in vim, just type
`:make` inside of a JS file to have it executed with node, then type `:copen`
to show the quickfix window.

However, if you are new to this, you probably want a keybinding like this in
your .vimrc

```
nmap <Leader><Leader> :w<CR>:make! \| botright cwindow<CR>
```
This will map `<leader><leader>` (`,,` for me) to excuting `:make` and
automatically opening the quickfix window if there was an error.

## Known Problems

* Node core modules are listed in the quickfix window, but can't be opened
  because node.js does not install those files on your local system. I am
  looking for ideas on a clever hack, otherwise I'll make an option for hiding
  those files from the error list.

[pathogen]: https://github.com/tpope/vim-pathogen
