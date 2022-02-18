export function saveState(state)
{
    var data = JSON.stringify(state);
    localStorage.setItem('state',data)
}

export function loadState()
{
    var data = localStorage.getItem('state');
    if(data==null)
        return []
    else
        return JSON.parse(data)
}