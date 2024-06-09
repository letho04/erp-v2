<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SettingRequest extends FormRequest
{
    private $table            = 'setting';
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
        if ($this->general) {
            $task = 'general';
        } elseif ($this->email_setting) {
            $task = 'email';
        } elseif ($this->social) {
            $task = 'social';
        }

        $id = $this->id;

        $condWebName    = '';
        $condAddress    = '';
        $condIntrodue   = '';
        $condLogo       = '';
        $condEmail      = '';
        $condPass       = '';
        $condEmailBcc   = '';
        $condFacebook   = '';
        $condYoutube    = '';
        $condInstagram  = '';
        $condTwitter    = '';

        switch ($task) {
            case 'general':
                $condWebName   = "bail|required|between:5,100";
                $condAddress   = "bail|required|between:5,100";
                $condIntrodue  = "bail|required|between:5,1000";
                $condLogo      = 'bail|required';
                break;
            case 'email':
                $condEmail      = "required|email";
                $condEmailBcc   = "required|email";
                $condPass       = 'bail|required|between:5,100';
                break;
            case 'social':
                $condFacebook   = 'bail|url';
                $condYoutube    = 'bail|url';
                $condInstagram  = 'bail|url';
                $condTwitter    = 'bail|url';
                break;
            default:
                break;
        }


        return [
            'webname'   => $condWebName,
            'email'     => $condEmail,
            'password'  => $condPass,
            'logo'      => $condLogo,
            'address'   => $condAddress,
            'introdue'  => $condIntrodue,
            'email_bcc' => $condEmailBcc,
            'facebook'  => $condFacebook,
            'youtube'   => $condYoutube,
            'instagram' => $condInstagram,
            'twitter'   => $condTwitter

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
