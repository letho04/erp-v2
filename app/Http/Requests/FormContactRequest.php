<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FormContactRequest extends FormRequest
{
    private $table            = '';
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $condName       = "bail|required|between:5,100";
        $condEmail      = "bail|required|email";
        $condPhone      = "bail|required|numeric";
        $condSubject    = "bail|required|between:5,1000";
        $condMessage    = "bail|required|between:5,1000";

        return [
            'name'        => $condName,
            'email'       => $condEmail,
            'phone'       => $condPhone,
            'subject'     => $condSubject,
            'message'     => $condMessage
        ];
    }

    public function messages()
    {
        return [
            // 'name.required' => 'Name không được rỗng',
            // 'name.min'      => 'Name :input chiều dài phải có ít nhất :min ký tứ',
        ];
    }
    public function attributes()
    {
        return [
            // 'description' => 'Field Description: ',
        ];
    }
}
