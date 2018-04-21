'use strict';
var Data = function(){
    var data = [];
};

Data.prototype.load = function(){
    var d = [];
    // load from localStorage
    d = JSON.parse(localStorage.getItem('books'));
    
    if(!d || !d.length){
        d = [
            {
                'id': 1,
                'title': 'Название книги 1',
                'author': 'Автор 1',
                'year': 2015,
                'image': 'http://html5.by/wp-content/uploads/2014/02/article-main-image-300x300.png'
            },
            {
                'id': 2,
                'title': 'Название книги 2',
                'author': 'Автор 2',
                'year': 2016,
                'image': 'http://html5.by/wp-content/uploads/2014/02/article-main-image-300x300.png'
            },
            {
                'id': 3,
                'title': 'Название книги 3',
                'author': 'Автор 3',
                'year': 2013,
                'image': 'http://html5.by/wp-content/uploads/2014/02/article-main-image-300x300.png'
            }
        ];
    }
    this.setData(d);
    this.updateLocalStorage();
    return this.getData();
};

Data.prototype.getData = function(){
    if(!this.data || !this.data.length){
        this.load();
    }
    return this.data;
};

Data.prototype.setData = function(data){
    this.data = data;
    return this;
};

Data.prototype.updateLocalStorage = function(){
    localStorage.setItem('books', JSON.stringify(this.data));
};

Data.prototype.findById = function(id){
    if(!this.data || !this.data.length){
        this.load();
    }
    for(var i = 0; i < this.data.length; i++){
        if(this.data[i].id == id){
            return this.data[i];
        }
    }
};

Data.prototype.deleteBook = function(id){
    if(!this.data || !this.data.length){
        this.load();
    }
    for(var i = 0; i < this.data.length; i++){
        if(this.data[i].id === id){
            this.data.splice(i, 1);
            this.updateLocalStorage();
            return true;
        }
    }
};

Data.prototype.saveBook = function(item){
    if(item.id && item.id != ''){
        // edit
        for(var i = 0; i < this.data.length; i++){
            if(this.data[i].id === item.id){
                this.data.splice(i, 1, item);
                this.updateLocalStorage();
                return true;
            }
        }
    } else {
        // add
        item.id = this.getNextId();
        this.data.push(item);
    }
    this.updateLocalStorage();
    return true;
};

Data.prototype.getNextId = function(){
    var max = 0;
    for(var i = 0; i < this.data.length; i++){
        if(this.data[i].id > max){
            max = this.data[i].id;
        }
    }
    return max+1;
};



