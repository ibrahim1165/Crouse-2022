import React from 'react';

const Rating = () => {
    return (
        <div>
             <div className="text-sm">
            <div class="rating">
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" checked />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" />
            </div>
        </div>
        </div>
    );
};

export default Rating;