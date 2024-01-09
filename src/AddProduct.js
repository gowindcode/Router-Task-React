
export function AddProduct() {

  const formik = useFormik({
    initialvalues: { name: '', url: '', description: '', rating: '', price: '' },
    validationSchema: forvalidationSchema,
  });

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={formik.handleSubmit}>
        <input id='name' name='url' type='text' value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} />
        <br />
        {formik.touched.name && formik.errors.name ? formik.errors.name : ''}
        <br />
        <input id='url' name='url' type='text' value={formik.values.url}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} />
        <br />
        {formik.touched.url && formik.errors.url ? formik.errors.url : ''}
        <br />
        <input id='description' name='description' type='text' value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} />
        <br />
        {formik.touched.description && formik.errors.description ? formik.errors.description : ''}
        <br />
        <input id='rating' name='rating' type='number' value={formik.values.rating}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} />
        <br />
        {formik.touched.rating && formik.errors.rating ? formik.errors.rating : ''}
        <br />
        <input id='price' name='price' type='number' value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} />
        <br />
        {formik.touched.price && formik.errors.price ? formik.errors.price : ''}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
