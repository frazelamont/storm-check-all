import CheckAll from './libs/component';

const onDOMContentLoadedTasks = [() => {
    window.__CHECK_ALL__ = CheckAll.init('.js-check__all');

    document.getElementById('item-1').addEventListener('change', e => {
        console.log(e.target.checked);
    })
}];

{ onDOMContentLoadedTasks.forEach((fn) => fn()); }