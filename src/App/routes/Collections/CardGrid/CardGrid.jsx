import { useState } from 'react';

import { FixedSizeGrid as Grid } from 'react-window';

import Box from '@mui/material/Box';


import ERC721Card from './ERC721Card/ERC721Card';

const Cell = ({ columnIndex, rowIndex, style }) => {
    return (
        <div style={style}>
            <ERC721Card />
        </div>
    );
}

const COLUMN_SIZE = 5;


const CardGrid = () => {
    const [count, setCount] = useState(20);
    return (
        <Box sx={{ width: "100%" }}>
            <Grid
                style={{ width: '100%' }}
                // onItemsRendered={this.onItemsRendered(onItemsRendered)}
                columnCount={COLUMN_SIZE}
                columnWidth={270}
                height={1350}
                rowCount={Math.ceil(count / COLUMN_SIZE)}
                rowHeight={450}
                width={1024}
            // ref={ref}
            >
                {Cell}
            </Grid>
        </Box>
    );
}

export default CardGrid;