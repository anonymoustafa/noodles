
        const doSomething = (callback) => {
                //do things
                //do things
                const result = console.log("1");
                callback(result);
        };

        doSomething((result) => {
                console.log(result);
        });

        doSomething((result) => {
                doSomething((result) => {
                        doSomething((result) => {
                                console.log(result);
                        });
                });
        });

