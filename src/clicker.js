import React from 'react';

export default function Clicker({number}) {
    if (number > 4) {
        return <div>counter {number} oups</div>
    }
    if (number > 0) {
        return <div>counter {number} ouch</div>
    }
    return <div>counter n/a</div>
}