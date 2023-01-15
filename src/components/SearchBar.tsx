import { useEffect, useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { getCategories } from '../data/api';

const SearchBar = (props: { onSubmit: (arg0: string, arg1: number, arg2: boolean) => void }) => {
    const [term, setTerm] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [adult, setAdult] = useState<boolean>(false);
    const [categories, setCategories] = useState<any>();

    const handleCategoryChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value);
    };

    const handleAdultChange = (event: SelectChangeEvent) => {
        const boolValue = JSON.parse(event.target.value);
        setAdult(boolValue);
    };

    const handleChange = (event: any) => {
        setTerm(event.target.value);
    };

    const handleFormSubmit = (event: any) => {
        event.preventDefault();
        props.onSubmit(term, Number(category), adult);
    };

    useEffect(() => {
        const getCats = async () => {
            setCategories(await getCategories());
        };

        getCats();
    }, []);

    let categoriesLoaded: boolean = false;
    if (categories != null) {
        categoriesLoaded = true;
    }

    return (
        <Box
            sx={{
                '& .MuiGrid-container': {
                    alignItems: 'center'
                }
            }}
            marginTop={4}
        >
            <form onSubmit={handleFormSubmit}>
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <TextField
                            id='search-field'
                            label='Search'
                            variant='outlined'
                            size='small'
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={8} md={2}>
                        <FormControl fullWidth>
                            <InputLabel id='category-select-label' size='small'>
                                Category
                            </InputLabel>
                            <Select
                                labelId='category-select-label'
                                id='category-select'
                                value={category.toString()}
                                label='Category'
                                size='small'
                                onChange={handleCategoryChange}
                            >
                                {categoriesLoaded ? (
                                    categories.map((singleCategorie: any, counter: number) => (
                                        <MenuItem key={counter} value={singleCategorie.id}>
                                            {singleCategorie.name}
                                        </MenuItem>
                                    ))
                                ) : (
                                    <MenuItem value={0}>Categories Loading..</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4} md={1}>
                        <FormControl fullWidth>
                            <InputLabel id='adult-select-label' size='small'>
                                Adult
                            </InputLabel>
                            <Select
                                labelId='adult-select-label'
                                id='adult-select'
                                value={adult.toString()}
                                label='Adult'
                                size='small'
                                onChange={handleAdultChange}
                            >
                                <MenuItem value={'true'}>Yes</MenuItem>
                                <MenuItem value={'false'}>No</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={1}>
                        <Button variant='outlined' color='success' size='medium' type='submit'>
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default SearchBar;
