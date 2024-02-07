import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CustomChip from './Chip';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodType, string, z } from 'zod';

const style = {
  width: '31vw',
  marginTop: '1rem',
};

const btnst = {
  backgroundColor: '#48B1ED',
  color: 'white',
  padding: '0.8rem 2.5rem',
  borderRadius: '0.5vw ',
  border: 'none',
  cursor: 'pointer',
  fontWeight: '700',
};

type FormData = {
  title: string;
  assignTo: string;
  description: string;
  startDate: string;
  endDate: string;
  priority: 'Low' | 'Medium' | 'High';
  assignWork: 'Other' | 'Deposits' | 'Withdrawals';
};

export default function Form() {
  const schema: ZodType<FormData> = z.object({
    title: z.string().min(3).max(50),
    assignTo: z.string().min(3).max(50),
    description: z.string().max(100),
    startDate: z.date(),
    endDate: z.date(),
    priority: z.enum(['Low', 'Medium', 'High']),
    assignWork: z.enum(['Other', 'Deposits', 'Withdrawals']),
  });

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submitData = (data: FormData) => {
    console.log(data);
  };

  return (
    <form style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', padding: '3rem', alignItems: 'baseline' }} onSubmit={handleSubmit(submitData)}>
      <TextField id="title" label="Title *" variant="outlined" style={style} {...register('title')} />
      {errors.title && <p style={{ color: 'red', marginLeft: '0.3rem', marginTop: '-0.5rem' }}>{errors.title.message}</p>}
      <TextField id="assignTo" label="Assign To *" variant="outlined" style={style} {...register('assignTo')} />
      {errors.assignTo && <p style={{ color: 'red', marginLeft: '0.3rem', marginTop: '-0.5rem' }}>{errors.assignTo.message}</p>}
      <TextField id="description" label="Description" variant="outlined" style={style} {...register('description')} />
      {errors.description && <p style={{ color: 'red', marginLeft: '0.3rem', marginTop: '-0.5rem' }}>{errors.description.message}</p>}
      <div style={{ ...style, display: 'flex', justifyContent: 'space-between' }}>
        <TextField
          id="start-date"
          label="Start Date"
          type="date"
          defaultValue="2022-01-01"
          style={{ width: '11.9rem' }}
          InputLabelProps={{
            shrink: true,
          }}
          {...register('startDate', { valueAsDate: true })}
        />
        {errors.startDate && <p style={{ color: 'red', marginLeft: '0.3rem', marginTop: '-0.5rem' }}>{errors.startDate.message}</p>}
        <TextField
          id="end-date"
          label="End Date"
          type="date"
          defaultValue="2022-01-01"
          style={{ width: '11.9rem' }}
          InputLabelProps={{
            shrink: true,
          }}
          {...register('endDate', { valueAsDate: true })}
        />
        {errors.endDate && <p style={{ color: 'red', marginLeft: '0.3rem', marginTop: '-0.5rem' }}>{errors.endDate.message}</p>}
      </div>
      <div style={style}>
        <h6 style={{ marginLeft: '0.3rem', marginBottom: '0.6rem' }}>Priority</h6>
        <CustomChip labels={['Low', 'Medium', 'High']} {...register("priority",)} />
        {errors.priority && <p style={{ color: 'red', marginLeft: '0.3rem', marginTop: '-0.5rem' }}>{errors.priority.message}</p>}
      </div>
      <div style={style}>
        <h6 style={{ marginLeft: '0.3rem', marginBottom: '0.6rem' }}>Assign Work</h6>
        <CustomChip labels={['Other', 'Deposits', 'Withdrawals']} {...register("assignWork")} />
        {errors.assignWork && <p style={{ color: 'red', marginLeft: '0.3rem', marginTop: '-0.5rem' }}>{errors.assignWork.message}</p>}
      </div>
      <button
        type='submit'
        style={{ ...btnst, marginLeft: '70%', marginTop: '3rem' }}
      >
        CONFIRM AND ADD TASK
      </button>
    </form>
  );
}
