/*cd <directory>: We add the directory to our path.
cd ..: We go up one level by removing the last directory from our path. We can't go up from the root.
cd .: We stay in the current directory, so we do nothing.*/

const fun = arr =>{
    let path = [];

    for(const command of arr) {
        const parts = command.split(' ');
        const instruction = parts[0];
        const argument = parts[1];
        if(instruction !== 'cd') {
            continue;
        }
        if(argument == '.') {
            continue;
        }else if (argument === '..') {
            path.pop();
        } else {
            path.push(argument);
        
        }

    }
            return '/' +path.join('/');


}

console.log(fun(['cd users', 'cd .', 'cd admin', 'cd ..']))