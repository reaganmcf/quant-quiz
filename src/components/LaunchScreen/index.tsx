import * as React from 'react';
import { Link } from 'react-router-dom'

export const LaunchScreen: React.FC = () => { 

    return (
        <div>
            <p>
                Launch Screen
            </p>
            <Link to="/game">Play game</Link>
        </div>
    )
}