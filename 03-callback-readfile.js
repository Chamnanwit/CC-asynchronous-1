// ES Module
// import ... from ...

// Common JS Import
const fs = require('fs');

// ###################################################

// ### ReadFile  : Async == ไม่ block == code บรรทัดถัดไปจะถูกรันต่อทันที
// หน้าตา readFile(path,option,callback)
// หน้าตา callback(err,data)
// callback ทำงานเมื่ออ่านไฟล์จบ case1.อ่านได้ case2.อ่านไม่ได้
// error first callback == parameter ตัวที่ 1 จะเป็น error

// EX-1 Basic Readfile
// fs.readFile('text00.txt', 'utf-8', (err, data) => {
//     // จะรันหลังจากอ่านไฟล์จบ
//     console.log('-'.repeat(30));
//     console.log(err);
//     console.log('-'.repeat(30));
//     console.log(data);
// });

// Ex-2 : Read in sequence

// fs.readFile('text00.txt', 'utf-8', (err, data) => {
//     console.log('read-1', data);
//     fs.readFile(data, 'utf-8', (err, data) => {
//         console.log('read-2', data);
//         fs.readFile(data, 'utf-8', (err, data) => {
//             console.log('read-3', data);
//             fs.readFile(data, 'utf-8', (err, data) => {
//                 console.log('read-4', data);
//                 fs.readFile(data, 'utf-8', (err, data) => {
//                     console.log('read-5', data);
//                 });
//             });
//         });
//     });
// });

// Other Code : ไม่รอให้อ่านไฟล์เสร็จ
console.log('Global');

// Ex-3 : Pain : Callback Hell

// fs.readFile('text00.txt', 'utf-8', (err, data) => {
//     console.log('read-1', data);
//     fs.readFile(data, 'utf-8', (err, data) => {
//         console.log('read-2', data);
//         fs.readFile(data, 'utf-8', (err, data) => {
//             console.log('read-3', data);
//             fs.readFile(data, 'utf-8', (err, data) => {
//                 console.log('read-4', data);
//                 fs.readFile(data, 'utf-8', (err, data) => {
//                     console.log('read-5', data);
//                     fs.readFile(data, 'utf-8', (err, data) => {
//                         console.log('read-next', data);
//                         fs.readFile(data, 'utf-8', (err, data) => {
//                             console.log('read-next', data);
//                             fs.readFile(data, 'utf-8', (err, data) => {
//                                 console.log('read-next', data);
//                                 fs.readFile(data, 'utf-8', (err, data) => {
//                                     console.log('read-next', data);
//                                     fs.readFile(data, 'utf-8', (err, data) => {
//                                         console.log('read-next', data);
//                                         fs.readFile(data, 'utf-8', (err, data) => {
//                                             console.log('read-next', data);
//                                             fs.readFile(data, 'utf-8', (err, data) => {
//                                                 console.log('read-next', data);
//                                                 fs.readFile(data, 'utf-8', (err, data) => {
//                                                     console.log('read-next', data);
//                                                     fs.readFile(data, 'utf-8', (err, data) => {
//                                                         console.log('read-next', data);
//                                                         fs.readFile(data, 'utf-8', (err, data) => {
//                                                             console.log('read-next', data);
//                                                             fs.readFile(
//                                                                 data,
//                                                                 'utf-8',
//                                                                 (err, data) => {
//                                                                     console.log('read-next', data);
//                                                                 }
//                                                             );
//                                                         });
//                                                     });
//                                                 });
//                                             });
//                                         });
//                                     });
//                                 });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });

setTimeout(() => {
    console.log('A');
    setTimeout(() => {
        console.log('B');
        setTimeout(() => {
            console.log('C');
            setTimeout(() => {
                console.log('D');
                setTimeout(() => {
                    console.log('E');
                    setTimeout(() => {
                        console.log('F');
                        setTimeout(() => {
                            console.log('G');
                            setTimeout(() => {
                                console.log('H');
                                setTimeout(() => {
                                    console.log('I');
                                    setTimeout(() => {
                                        console.log('J');
                                        setTimeout(() => {
                                            console.log('K');
                                            setTimeout(() => {
                                                console.log('L');
                                                setTimeout(() => {
                                                    console.log('M');
                                                    setTimeout(() => {
                                                        console.log('N');
                                                        setTimeout(() => {
                                                            console.log('O');
                                                            setTimeout(() => {
                                                                console.log('P');
                                                                setTimeout(() => {
                                                                    console.log('Q');
                                                                    setTimeout(() => {
                                                                        console.log('R');
                                                                        setTimeout(() => {
                                                                            console.log('S');
                                                                            setTimeout(() => {
                                                                                console.log('T');
                                                                                setTimeout(() => {
                                                                                    console.log(
                                                                                        'U'
                                                                                    );
                                                                                    setTimeout(
                                                                                        () => {
                                                                                            console.log(
                                                                                                'V'
                                                                                            );
                                                                                            setTimeout(
                                                                                                () => {
                                                                                                    console.log(
                                                                                                        'W'
                                                                                                    );
                                                                                                    setTimeout(
                                                                                                        () => {
                                                                                                            console.log(
                                                                                                                'X'
                                                                                                            );
                                                                                                            setTimeout(
                                                                                                                () => {
                                                                                                                    console.log(
                                                                                                                        'Y'
                                                                                                                    );
                                                                                                                    setTimeout(
                                                                                                                        () => {
                                                                                                                            console.log(
                                                                                                                                'Z'
                                                                                                                            );
                                                                                                                        },
                                                                                                                        1000
                                                                                                                    );
                                                                                                                },
                                                                                                                1000
                                                                                                            );
                                                                                                        },
                                                                                                        1000
                                                                                                    );
                                                                                                },
                                                                                                1000
                                                                                            );
                                                                                        },
                                                                                        1000
                                                                                    );
                                                                                }, 1000);
                                                                            }, 1000);
                                                                        }, 1000);
                                                                    }, 1000);
                                                                }, 1000);
                                                            }, 1000);
                                                        }, 1000);
                                                    }, 1000);
                                                }, 1000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
